<template>
  <input v-bind="$attrs" type="file" accept="image/*" @change="onFileChange" />

  <PopupMain ref="popupProjectCropper">
    <div class="container-cropper">
      <img
        class="cropper-image"
        ref="imageElement"
        :src="imageUrl"
        alt="Image for cropping"
      />
      <div>
        <button @click="emitCroppedImage" type="button">Сохранить</button>
      </div>
    </div>
  </PopupMain>
</template>

<script setup lang="ts">
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

const props = defineProps({
  options: {
    type: Object,
    default: () => ({
      aspectRatio: 16 / 9,
      viewMode: 1,
      dragMode: 'none',
      cropBoxResizable: false,
    }),
  },
  cropBoxData: {
    type: Object,
    default: () => ({
      width: 1920,
      height: 1080,
    }),
  },
});

const imageUrl = ref<string | undefined>(undefined);
const imageElement = ref<HTMLImageElement | null>(null);
const popupProjectCropper = ref<any>(null);
let originalFileType = '';

let cropper: Cropper | null = null;

const emit = defineEmits(['cropped']);

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    originalFileType = file.type;

    const reader = new FileReader();
    reader.onload = async (e) => {
      imageUrl.value = e.target?.result as string;
      popupProjectCropper.value.open();

      await nextTick();

      if (cropper) {
        cropper.destroy();
      }
      cropper = new Cropper(imageElement.value as HTMLImageElement, {
        ...props.options,
        ready: () => {
          cropper?.setCropBoxData(props.cropBoxData);
        },
      });
    };
    reader.readAsDataURL(file);
  }
};

const emitCroppedImage = () => {
  if (cropper) {
    cropper.getCroppedCanvas().toBlob((blob) => {
      if (blob) {
        const croppedFile = new Blob([blob], { type: originalFileType });
        const newFileName = `${generateRandomString(10)}${getExtensionFromMimeType(originalFileType)}`;

        emit('cropped', croppedFile, newFileName);
        popupProjectCropper.value.close();

        setTimeout(() => {
          cropper?.destroy();
        }, 300);
      }
    }, originalFileType);
  }
};
</script>

<style>
.container-cropper {
  box-sizing: content-box;
  padding: 10px;
  background: #202833;
  border-radius: 13px;
  max-width: 1000px;
  max-height: 700px;
  width: 100%;
  height: 100%;
}

.cropper-modal {
  background: #202833;
}

.cropper-bg {
  background-image: none !important;
  background: #202833;
}
</style>
