<template>
  <div class="images-block">
    <template v-if="mediaItems">
      <div
        v-for="(media, index) in mediaItems"
        :key="index"
        class="project_images"
      >
        <input
          :id="`project_images_${index}`"
          accept="image/jpeg,image/x-png"
        />
        <label
          :for="`project_images_${index}`"
          :style="{ backgroundImage: `url(${media.medium})` }"
        >
        </label>

        <div class="removeImage">
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 1C6 0.447266 6.44727 0 7 0H11C11.1836 0 11.3555 0.0488281 11.5039 0.134766C11.8008 0.308594 12 0.630859 12 1V2H17C17.5527 2 18 2.44727 18 3C18 3.55273 17.5527 4 17 4H16V19C16 19.5523 15.5523 20 15 20H3C2.44772 20 2 19.5523 2 19V4H1C0.447266 4 0 3.55273 0 3C0 2.44727 0.447266 2 1 2H6V1ZM4 6V18H6V6H4ZM8 6V18H10V6H8ZM12 6V18H14V6H12Z"
              fill="#202833"
            ></path>
          </svg>
        </div>
      </div>
    </template>
    <div v-for="n in mediaItems ? 3 : 6" :key="n" class="project_images">
      <CropperMain
        @cropped="handleCroppedImage"
        :id="`project_images__${n}`"
        type="file"
        accept="image/jpeg,image/x-png"
      />
      <label :for="`project_images__${n}`">
        <div class="title_image_plus">
          <svg
            width="47"
            height="47"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.0013 71.3337C55.5154 71.3337 71.3346 55.5144 71.3346 36.0003C71.3346 16.4863 55.5154 0.666992 36.0013 0.666992C16.4872 0.666992 0.667969 16.4863 0.667969 36.0003C0.667969 55.5144 16.4872 71.3337 36.0013 71.3337ZM39.5346 11.267V32.467H60.7346V39.5337H39.5346V60.7337H32.468V39.5337H11.268V32.467H32.468L32.468 11.267H39.5346Z"
            ></path>
          </svg>
        </div>
      </label>

      <div class="removeImage">
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 1C6 0.447266 6.44727 0 7 0H11C11.1836 0 11.3555 0.0488281 11.5039 0.134766C11.8008 0.308594 12 0.630859 12 1V2H17C17.5527 2 18 2.44727 18 3C18 3.55273 17.5527 4 17 4H16V19C16 19.5523 15.5523 20 15 20H3C2.44772 20 2 19.5523 2 19V4H1C0.447266 4 0 3.55273 0 3C0 2.44727 0.447266 2 1 2H6V1ZM4 6V18H6V6H4ZM8 6V18H10V6H8ZM12 6V18H14V6H12Z"
            fill="#202833"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import apiPoints from '~/constants/apiPoints';

const props = defineProps({
  mediaItems: {
    type: Array<ProjectMedia>,
    default: () => null,
  },
  stageId: {
    type: Number,
    required: true,
  },
});

const handleCroppedImage = async (file, fileName: string) => {
  const formData = new FormData();
  formData.append('modelId', props.stageId);
  formData.append('type', 'image');
  formData.append('file', file, fileName);

  try {
    const response = await useAuthFetch(apiPoints.mediaProject(), {
      method: 'POST',
      body: formData,
    });
  } catch (error) {
    console.error('Произошла ошибка при загрузке:', error);
  }
};
</script>
