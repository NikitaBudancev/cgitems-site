<template>
  <div class="content content-height">
    <div class="container container-reviews container-top">
      <div
        class="content-top content-top-banner"
        style="
          background-image: url('https://cgitems.ru/local/templates/cgitems/assets/images/bg-full-project.jpg');
        "
      >
        <h1 class="content-top__title">
          Портфолио моих
          <span class="subtext"> студентов — мое портфолио </span>
        </h1>
        <div class="content-top__text">
          Моя цель - помочь студентам пройти путь от новичка до специалиста,
          готового к работе в геймдеве. Поэтому я не доделываю работы за
          студентов, все работы созданы учениками самостоятельно.
        </div>
      </div>
    </div>
    <section class="breadcrumbs breadcrumbs-projects-sticky">
      <div class="container">
        <div
          class="breadcrumbs__inner breadcrumbs__inner-project"
          itemtype="https://schema.org/BreadcrumbList"
        >
          <div
            class="breadcrumbs__item"
            itemprop="itemListElement"
            itemtype="https://schema.org/ListItem"
          >
            <a class="link breadcrumbs__link" href="/" itemprop="item"
              ><span itemprop="name">Курсы</span></a
            >
          </div>
          <span class="breadcrumbs__separator">&gt;</span>
          <div
            class="breadcrumbs__item"
            itemprop="itemListElement"
            itemtype="https://schema.org/ListItem"
          >
            <a class="link breadcrumbs__link" href="/projects/" itemprop="item">
              <span itemprop="name">Работы студентов</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="sticky-projects">
      <div class="container">
        <div
          class="panel-bar border-radius-10 panel-bar-border panel-sort shadow"
          id="project-filter"
        >
          <div class="panel-bar-elements scrolling-wrapper-flexbox">
            <button class="bar-element" data-name="DRAFT">
              <span class="bar-element-title pointer-none">Draft</span>
              <span class="bar-element-subtitle pointer-none"> 1 этап </span>
            </button>
            <button class="bar-element" data-name="HP">
              <span class="bar-element-title pointer-none">Highpoly / HP</span>
              <span class="bar-element-subtitle pointer-none"> 2 этап </span>
            </button>
            <button class="bar-element" data-name="LP">
              <span class="bar-element-title pointer-none">Lowpoly / LP</span>
              <span class="bar-element-subtitle pointer-none"> 3 этап </span>
            </button>
            <button class="bar-element" data-name="BAKE">
              <span class="bar-element-title pointer-none">Bake</span>
              <span class="bar-element-subtitle pointer-none"> 4 этап </span>
            </button>
            <button class="bar-element" data-name="RENDER">
              <span class="bar-element-title pointer-none">Render</span>
              <span class="bar-element-subtitle pointer-none"> 5 этап </span>
            </button>
            <button class="bar-element" data-name="MARMOSET">
              <span class="bar-element-title pointer-none">Sketchfab</span>
              <span class="bar-element-subtitle pointer-none"> 3D Viewer </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <section class="projects">
        <ul v-if="pending" class="projects__list projects__list-p">
          <li v-for="n in 16" :key="n" class="project project-pending">
            <img
              class="project-pending__img"
              src="/images/preview-article.png"
              alt=""
            />
          </li>
        </ul>
        <ul v-else class="projects__list projects__list-p">
          <li
            v-for="project in data?.result.projects"
            :key="project?.id"
            class="project"
          >
            <img
              width="448"
              height="270"
              class="project__img"
              :src="project.stage?.preview.large"
              alt="Lightpoles Asset"
            />
            <NuxtLink
              class="project__link"
              :to="'/' + project.user.nickname + '/' + project.slug"
              title="Lightpoles Asset"
              >Lightpoles Asset</NuxtLink
            >
            <div class="project__wrap">
              <div class="project__top">
                <div class="reviews__user reviews__user-project">
                  <div class="reviews__user-left">
                    <AvatarMain
                      :href="'/' + project.user.nickname"
                      :fullName="`${project.user.first_name} ${project.user.last_name}`"
                      :src="project.user.avatar.small"
                    />
                  </div>
                  <div class="reviews__user-right project-user-name">
                    <span class="user-name">{{ project.user.name }}</span>
                  </div>
                </div>
                <div class="stage">{{ project.stage.property.name }}</div>
              </div>
              <div class="project__bottom">
                <div class="project__title">{{ project.name }}</div>
                <div class="project__info project__info-show">
                  <div class="project__info-item project__info-item-wiews">
                    45
                  </div>
                  <div class="project__info-item project__info-item-likes">
                    3
                  </div>
                  <div class="project__info-item project__info-item-comments">
                    0
                  </div>
                </div>
              </div>
            </div>
            <button
              class="btn-circle btn-circle-blue btn-share project__share-show"
            >
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.18138 0.189453L18.6917 8.4766L9.18138 16.5362V11.3781C6.12821 11.3117 2.43977 11.9565 0.77096 14.7631C0.0408562 9.4722 4.32666 5.0916 9.18138 5.00626V0.189453Z"
                  fill="white"
                ></path>
              </svg>
            </button>
            <div class="share share-projects" data-popup-active="share">
              <div class="share__title">Поделиться</div>
              <ul class="list social__list social__list-share">
                <li class="social__item social__item-share">
                  <a
                    href="https://vk.com/share.php?url=https://cgitems.ru/projects/lightpoles-asset-/"
                    class="social__link social__link-share"
                    title="Вконтакте"
                    target="_blank"
                  >
                    <svg
                      class="social__icon social__icon-share"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#7D92B0"
                        fill-rule="evenodd"
                        d="M2.859 0h18.282A2.875 2.875 0 0 1 24 2.869V21.14A2.867 2.867 0 0 1 21.141 24H2.859A2.86 2.86 0 0 1 0 21.141V2.869A2.869 2.869 0 0 1 2.859 0zm16.045 16.465h-1.636c-.621 0-.812-.497-1.93-1.616-.967-.937-1.397-1.07-1.636-1.07-.325 0-.42.095-.42.554v1.482c0 .402-.135.631-1.177.631-1.73 0-3.652-1.042-5-3.002-2.037-2.85-2.592-5.001-2.592-5.44 0-.24.096-.46.555-.46h1.635c.41 0 .574.191.726.631.813 2.333 2.161 4.38 2.716 4.38.21 0 .306-.096.306-.612v-2.42c-.067-1.109-.65-1.204-.65-1.606 0-.182.162-.373.41-.373h2.573c.354 0 .478.191.478.603v3.25c0 .354.163.479.249.479.21 0 .382-.125.765-.507 1.176-1.32 2.017-3.356 2.017-3.356.115-.24.306-.46.717-.46h1.635c.488 0 .603.259.488.603-.2.956-2.2 3.777-2.2 3.777-.18.287-.238.42 0 .736.173.24.747.727 1.13 1.176.697.794 1.233 1.463 1.376 1.922.163.46-.076.698-.545.698h.01z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li class="social__item social__item-share">
                  <a
                    href="https://telegram.me/share/?url=https://cgitems.ru/projects/lightpoles-asset-/"
                    class="social__link social__link-share"
                    title="telegram"
                    target="_blank"
                  >
                    <svg
                      class="social__icon social__icon-share"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#7D92B0"
                        fill-rule="evenodd"
                        d="M2.867 0h18.266A2.876 2.876 0 0 1 24 2.869V21.14A2.868 2.868 0 0 1 21.133 24H2.867A2.868 2.868 0 0 1 0 21.141V2.869A2.876 2.876 0 0 1 2.867 0zm7.16 14.161l-.316 3.385s-.143 1.052.908 0a31.024 31.024 0 0 1 1.825-1.683c1.186.832 2.466 1.74 3.02 2.218.278.24.507.278.699.268.525-.02.668-.602.668-.602S19.278 7.86 19.364 6.54c0-.134.02-.22.02-.306 0-.124-.01-.248-.03-.306-.056-.162-.123-.2-.229-.248-.22-.077-.602.047-.602.047S5.103 10.575 4.33 11.111c-.163.114-.22.181-.249.258-.124.382.287.555.287.555l3.345 1.09.153.047c.038 0 .105 0 .134-.019.784-.497 7.914-5.02 8.334-5.173.058-.019.106 0 .096.048-.162.583-6.356 6.11-6.356 6.11s-.067.067-.048.124v.01z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li class="social__item social__item-share">
                  <a
                    class="social__link social__link-share"
                    href="whatsapp://send?text=https://cgitems.ru/projects/lightpoles-asset-/"
                    data-action="share/whatsapp/share"
                    title="whatsapp"
                    target="_blank"
                  >
                    <svg
                      class="social__icon social__icon-share"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.81329 0H28.1761C30.2734 0 32 1.7266 32 3.82391V28.1867C32 30.284 30.2734 32 28.1761 32H3.81329C1.71596 32 0 30.284 0 28.1867V3.82391C0 1.7266 1.71596 0 3.81329 0ZM11.7683 22.4032L12.0966 22.6044C13.3147 23.3247 14.6918 23.706 16.09 23.706C20.4012 23.706 23.9073 20.1999 23.9073 15.8888C23.9073 11.567 20.4012 8.06092 16.09 8.06092C11.7788 8.06092 8.2727 11.567 8.2727 15.8888C8.2727 17.3082 8.66471 18.7064 9.41678 19.9351L9.61797 20.2741L8.83414 23.187L11.7683 22.4032ZM19.6809 17.2234C19.2784 16.9904 18.77 16.7256 18.2933 16.9162C17.9332 17.0645 17.7107 17.6259 17.4777 17.9119C17.3612 18.0602 17.2128 18.0814 17.0327 18.0073C15.6875 17.4671 14.6495 16.5667 13.908 15.3274C13.7809 15.1367 13.802 14.9884 13.9609 14.8083C14.1833 14.5435 14.4694 14.2469 14.5223 13.8868C14.5859 13.5267 14.4164 13.1135 14.2681 12.7958C14.088 12.3933 13.8762 11.8107 13.4631 11.5882C13.0923 11.3764 12.6051 11.4929 12.2661 11.7683C11.6941 12.2344 11.4188 12.9652 11.4294 13.6855C11.4294 13.8974 11.4505 14.0986 11.5035 14.2999C11.62 14.7766 11.8425 15.2214 12.0861 15.6557C12.2768 15.9735 12.478 16.2807 12.7004 16.5773C13.4207 17.5624 14.3211 18.4098 15.3592 19.0453C15.8782 19.3631 16.4289 19.6385 17.0115 19.8292C17.6577 20.0516 18.2403 20.2741 18.9395 20.1364C19.6703 19.9987 20.3907 19.5432 20.6872 18.8335C20.772 18.6322 20.8143 18.3992 20.7613 18.1768C20.666 17.7213 20.0516 17.4459 19.6809 17.2234ZM6.26022 25.7716L7.65838 20.5389C6.86394 19.1089 6.45082 17.5094 6.45082 15.8888C6.45082 10.5713 10.7725 6.23901 16.09 6.23901C21.4074 6.23901 25.7398 10.5713 25.7398 15.8888C25.7398 21.2062 21.4074 25.528 16.09 25.528C14.4905 25.528 12.9123 25.1254 11.5035 24.3628L6.26022 25.7716Z"
                        fill="#889DBA"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <div class="copy">
                <input
                  class="input input-dark copy__url"
                  type="text"
                  value="https://cgitems.ru/projects/lightpoles-asset-/"
                />
                <button class="copy__btn">Копировать</button>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <button class="btn btn-icon btn-scroll-up">
        <svg
          class="icon-scroll-up"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 0C4.47715 0 0 4.47715 0 10L0 30C0 35.5228 4.47715 40 10 40H30C35.5228 40 40 35.5228 40 30V10C40 4.47715 35.5228 0 30 0L10 0ZM30.6782 22.024C31.3344 22.6458 30.8944 23.75 29.9904 23.75L11.2596 23.75C10.3556 23.75 9.91559 22.6458 10.5718 22.024L19.9373 13.1515C20.323 12.7862 20.9271 12.7862 21.3127 13.1515L30.6782 22.024Z"
            fill="#384557"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import apiPoints from '~/constants/apiPoints';
import { cacheConfig } from '~/types/cacheConfig';
import type { apiResponseProjects } from '~/types/response/apiResponseProjects';

const { data, pending } = useAsyncData(
  cacheConfig.projects.key,
  () => {
    return useFetchData<apiResponseProjects>(apiPoints.projects());
  },
  {
    lazy: true,
    transform: transformData,
    getCachedData: (key) =>
      initCachedData(key, cacheConfig.projects.durationMinutes),
  },
);
</script>
