<template>
  <div class="articles">
    <div class="articles__center articles__center-profile">
      <div class="project-add__box project-add-profile scroll-blue">
        <NuxtLink class="project project-add" to="/personal/projects/new/">
          <span class="project-add__text">
            <svg
              width="71"
              height="71"
              viewBox="0 0 71 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.5013 70.8337C55.0154 70.8337 70.8346 55.0144 70.8346 35.5003C70.8346 15.9863 55.0154 0.166992 35.5013 0.166992C15.9872 0.166992 0.167969 15.9863 0.167969 35.5003C0.167969 55.0144 15.9872 70.8337 35.5013 70.8337ZM39.0346 10.767V31.967H60.2346V39.0337H39.0346V60.2337H31.968V39.0337H10.768V31.967H31.968L31.968 10.767H39.0346Z"
              ></path>
            </svg>
            Новый курсовой проект
          </span>
        </NuxtLink>
        <NuxtLink
          class="project project-add project-add__last"
          to="/personal/projects/new/"
        >
          <span class="project-add__text">
            <svg
              width="71"
              height="71"
              viewBox="0 0 71 71"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M35.5013 70.8337C55.0154 70.8337 70.8346 55.0144 70.8346 35.5003C70.8346 15.9863 55.0154 0.166992 35.5013 0.166992C15.9872 0.166992 0.167969 15.9863 0.167969 35.5003C0.167969 55.0144 15.9872 70.8337 35.5013 70.8337ZM39.0346 10.767V31.967H60.2346V39.0337H39.0346V60.2337H31.968V39.0337H10.768V31.967H31.968L31.968 10.767H39.0346Z"
              ></path>
            </svg>
            Новый личный проект
          </span>
        </NuxtLink>

        <template v-if="!pending">
          <div
            v-for="project in data.result"
            :key="project?.id"
            class="project project-sidebar"
          >
            <img
              class="project__img"
              :src="project.stage?.preview.large"
              :alt="project.name"
            />
            <NuxtLink
              class="project__link"
              :to="'/personal/projects/' + project.slug"
              title="Редактировать"
            >
              Редактировать
              <div class="delete_project">
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
            </NuxtLink>

            <div class="project__wrap">
              <div class="project__bottom">
                <div class="project__title">{{ project.name }}</div>
                <div class="project__info">
                  <span class="project__info-item project__info-item-date">
                    {{ project.created_at }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { transform } from 'typescript';
import apiPoints from '~/constants/apiPoints';
import { cacheConfig } from '~/types/cacheConfig';

definePageMeta({
  layout: 'personal',
  middleware: ['auth', 'verified'],
});

const { data, pending } = await useAsyncData(
  cacheConfig.meProjects.key,
  () => {
    return useFetchData(apiPoints.meProjects(), {
      isAuth: true,
    });
  },
  {
    lazy: true,
    transform: transformData,
    getCachedData: (key) =>
      initCachedData(key, cacheConfig.meProjects.durationMinutes),
  },
);
</script>
