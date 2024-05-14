<template>
  <div
    class="content__left-col content__left-col-mobile col-project col-project-profile"
  >
    <div class="sidebar sidebar-mobile">
      <div class="sidebar__top">
        <div class="sidebar__wrapper">
          <div class="profile-edit">
            <button class="btn-circle" data-sidebar-btn="sidebar-profile">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.42698 2.33108L11.6803 4.5845L13.7925 2.47227L11.5391 0.218844L9.42698 2.33108ZM0.214841 13.7849L3.04287 13.2156L10.9482 5.31956L8.68948 3.06088L0.793504 10.9662L0.214841 13.7849Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="sidebar__user">
          <div class="user user__default user__default-big user-color-icon">
            <a
              href="https://cgitems.ru/upload/main/b0d/gkskf9zxrno1lqs8uh9aceyf1lfe5ioc/1.jpg"
              target="_blank"
              ><img
                src="https://cgitems.ru/upload/main/b0d/gkskf9zxrno1lqs8uh9aceyf1lfe5ioc/1.jpg"
                width="150"
                height="150"
            /></a>
          </div>
          <div class="sidebar__user-name">
            <div class="sidebar__user-link">Тест Тестов</div>
          </div>
        </div>

        <button
          class="button button-sidebar sidebar-button-icon background-dark sidebar-button-mobile sidebar-button-mobile"
        >
          Мои проекты
        </button>

        <NuxtLink
          to="/personal/articles/"
          class="button button-sidebar sidebar-button-icon background-dark sidebar-button-mobile"
        >
          Сохраненные статьи
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
