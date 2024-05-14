<template>
  <div class="articles" v-if="!projectPending && !stagesPending">
    <div class="articles__center articles__center-profile">
      <div class="accordion accordion-profile">
        <form
          class="accordion__item accordion__item-profile new_project"
          id="project-form"
          enctype="multipart/form-data"
          data-redact="1"
        >
          <div class="accordion__item-content">
            <div class="accordion__item-content-left">
              <div class="title_image">
                <input
                  type="file"
                  name="title_image"
                  id="title_image"
                  accept="image/jpeg,image/x-png"
                />
                <label for="title_image">
                  <div class="title_image_plus">
                    <svg
                      width="72"
                      height="72"
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
                    <div class="title_image_text">Обложка этапа</div>
                  </div>
                </label>
              </div>
              <div class="project_text">
                <input
                  id="input_name"
                  v-model="projectFields.name"
                  type="text"
                  name="name"
                  placeholder="Название проекта*"
                />
                <textarea
                  id="input_description"
                  v-model="projectFields.projectDescription"
                  name="description"
                  placeholder="Описание проекта"
                ></textarea>
              </div>
            </div>
            <div class="accordion__item-content-right">
              <a class="project_back" href="/personal/">
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 5.25L11.9998 5.25C14.0709 5.25 15.7498 6.92893 15.7498 9C15.7498 11.0711 14.0709 12.75 11.9998 12.75L6.70734e-08 12.75L0 15.25L11.9998 15.25C15.4516 15.25 18.2498 12.4518 18.2498 9C18.2498 5.54822 15.4516 2.75 11.9998 2.75L6 2.75V0.961872C6 0.165141 5.06482 -0.284922 4.41916 0.201081L0.382944 3.23921C-0.127647 3.62354 -0.127647 4.37646 0.382944 4.76079L4.41916 7.79892C5.06482 8.28492 6 7.83486 6 7.03813L6 5.25Z"
                    fill="#202833"
                  ></path>
                </svg>
              </a>
              <UploaderImageProject
                :mediaItems="currentProjectStage?.media"
                :stageId="currentProjectStage?.id"
              />
              <div class="error_new_block">
                Типы файлов: jpeg, png<br />Размер не более: 5MB
              </div>
            </div>
          </div>

          <div class="accordion__content-bottom-new">
            <div class="panel-bar">
              <div class="panel-bar-elements">
                <button
                  v-for="stage in stagesData?.result"
                  :key="stage.id"
                  :class="[
                    'bar-element bar-element-project',
                    {
                      active:
                        currentProjectStage &&
                        currentProjectStage.property.id == stage.id,
                    },
                  ]"
                >
                  <span class="bar-element-title">{{ stage.name }}</span>
                  <span class="bar-element-subtitle">{{ stage.count }}</span>
                </button>
              </div>
            </div>
            <div class="accordion-wrapper__btn">
              <div class="accordion-project_type">
                <input type="hidden" name="project_type" value="41" />
                <span>Личный проект</span>
              </div>
              <button class="button-small button-default disabled">
                Сохранить
              </button>
            </div>
          </div>
        </form>
        <button @click="test">test123</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
console.log('project');

import apiPoints from '~/constants/apiPoints';

definePageMeta({
  layout: 'personal',
  middleware: ['student'],
});

const route = useRoute();
const currentProjectStage = ref<ProjectStage | null>(null);

const projectFields = reactive({
  name: '',
  projectDescription: '',
});

const { data: projectData, pending: projectPending } = await useAuthFetch(
  apiPoints.meProject(route.params.slug as string),
  {},
  { lazy: true },
);

// const { data: stagesData, pending: stagesPending } = await useApiFetch(
//   apiPoints.stages,
//   {},
//   { lazy: true },
// );

const stagesData = ref([]);
const stagesPending = ref(false);

watchEffect(() => {
  if (projectData.value && projectData.value?.result) {
    projectFields.name = projectData.value.result.name;
    projectFields.projectDescription =
      projectData.value.result.projectDescription;

    if (projectData.value.result.stages) {
      currentProjectStage.value = projectData.value.result.stages.reduce(
        (max, current) => {
          return max.property.id > current.property.id ? max : current;
        },
      );
    }
  }
});
</script>
