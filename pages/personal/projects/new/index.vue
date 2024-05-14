<template>
  <div class="articles">
    <div class="articles__center articles__center-profile">
      <div class="accordion accordion-profile">
        <form
          class="accordion__item accordion__item-profile new_project"
          id="project-form"
          enctype="multipart/form-data"
          data-redact="1"
        >
          <input type="hidden" name="stage" value="" />
          <input type="hidden" name="id" value="0" />

          <div class="accordion__item-content">
            <div class="accordion__item-content-left">
              <div class="title_image">
                <input
                  type="file"
                  name="title_image"
                  id="title_image"
                  accept="image/jpeg,image/x-png"
                  src=""
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
                  type="text"
                  name="name"
                  id="input_name"
                  value=""
                  placeholder="Название проекта*"
                />
                <textarea
                  name="description"
                  id="input_description"
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
              <div class="images-block">
                <div class="project_images">
                  <input
                    type="file"
                    name="project_images_0"
                    id="project_images_0"
                    accept="image/jpeg,image/x-png"
                    value=""
                  />
                  <label for="project_images_0">
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

                  <div
                    class="removeImage"
                    data-num="0"
                    data-id="0"
                    data-stage=""
                  >
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
                <div class="project_images">
                  <input
                    type="file"
                    name="project_images_1"
                    id="project_images_1"
                    accept="image/jpeg,image/x-png"
                    value=""
                  />
                  <label for="project_images_1">
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

                  <div
                    class="removeImage"
                    data-num="1"
                    data-id="0"
                    data-stage=""
                  >
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
                <div class="project_images">
                  <input
                    type="file"
                    name="project_images_2"
                    id="project_images_2"
                    accept="image/jpeg,image/x-png"
                    value=""
                  />
                  <label for="project_images_2">
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

                  <div
                    class="removeImage"
                    data-num="2"
                    data-id="0"
                    data-stage=""
                  >
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
                <div class="project_images">
                  <input
                    type="file"
                    name="project_images_3"
                    id="project_images_3"
                    accept="image/jpeg,image/x-png"
                    value=""
                  />
                  <label for="project_images_3">
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

                  <div
                    class="removeImage"
                    data-num="3"
                    data-id="0"
                    data-stage=""
                  >
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
                <div class="project_images">
                  <input
                    type="file"
                    name="project_images_4"
                    id="project_images_4"
                    accept="image/jpeg,image/x-png"
                    value=""
                  />
                  <label for="project_images_4">
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

                  <div
                    class="removeImage"
                    data-num="4"
                    data-id="0"
                    data-stage=""
                  >
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
                <div class="project_images">
                  <input
                    type="file"
                    name="project_images_5"
                    id="project_images_5"
                    accept="image/jpeg,image/x-png"
                    value=""
                  />
                  <label for="project_images_5">
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

                  <div
                    class="removeImage"
                    data-num="5"
                    data-id="0"
                    data-stage=""
                  >
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
              <div class="error_new_block">
                Типы файлов: jpeg, png<br />Размер не более: 5MB
              </div>
            </div>
          </div>

          <div class="accordion__content-bottom-new">
            <div class="panel-bar">
              <div class="panel-bar-elements">
                <a class="bar-element bar-element-project active" href="">
                  <span class="bar-element-title">Draft</span>
                  <span class="bar-element-subtitle">1 этап</span>
                </a>
                <a
                  class="bar-element bar-element-project"
                  href="?edit=Y&amp;stage_num=1&amp;CODE=0"
                >
                  <span class="bar-element-title">Highpoly / HP</span>
                  <span class="bar-element-subtitle">2 этап</span>
                </a>
                <a
                  class="bar-element bar-element-project"
                  href="?edit=Y&amp;stage_num=2&amp;CODE=0"
                >
                  <span class="bar-element-title">Lowpoly / LP</span>
                  <span class="bar-element-subtitle">3 этап</span>
                </a>
                <a
                  class="bar-element bar-element-project"
                  href="?edit=Y&amp;stage_num=3&amp;CODE=0"
                >
                  <span class="bar-element-title">Bake</span>
                  <span class="bar-element-subtitle">4 этап</span>
                </a>
                <a
                  class="bar-element bar-element-project"
                  href="?edit=Y&amp;stage_num=4&amp;CODE=0"
                >
                  <span class="bar-element-title">Render</span>
                  <span class="bar-element-subtitle">5 этап</span>
                </a>
                <a
                  class="bar-element bar-element-project"
                  href="?edit=Y&amp;stage_num=5&amp;CODE=0"
                >
                  <span class="bar-element-title">Sketchfab</span>
                  <span class="bar-element-subtitle">3D Viewer</span>
                </a>
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
      </div>
    </div>

    <div
      class="sidebar sidebar__left sidebar-review"
      data-sidebar="sidebar-review"
    >
      <div class="sidebar__top">
        <div class="sidebar__wrapper">
          <div class="reviews__user">
            <div class="reviews__user-left">
              <span
                class="user user__default user-reviews"
                style="background-color: #af848e"
              >
                <span class="icon icon-initials icon-reviews"></span>
              </span>
            </div>
            <div class="reviews__user-right">
              <span class="user-name"> </span>
              <div class="reviews__date">21 ноября 2023 в 23:11</div>
            </div>
          </div>
          <div class="profile-edit">
            <button class="btn-circle sidebar-exit" type="button">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8141 1.93368L8.74185 7.00595L13.8071 12.0713L12.0723 13.8061L7.00697 8.74084L1.93472 13.8131L0.192878 12.0713L5.26513 6.999L0.192873 1.92672L1.92775 0.191829L7.00001 5.26411L12.0723 0.191837L13.8141 1.93368Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <textarea
          class="input input-dark sidebar__textarea scroll-blue"
          id="project_review_textarea"
          disabled="true"
        ></textarea>
      </div>
      <div class="sidebar__bottom">
        <ul class="menu-mobile__list list">
          <li class="menu-mobile__item">
            <a href="/privacy-policy/" class="menu-mobile__link"
              >Политика конфиденциальности</a
            >
          </li>
        </ul>

        <div class="social">
          <ul class="social__list list">
            <li class="social__item">
              <a
                href="https://www.youtube.com/c/CGItems"
                target="_blank"
                class="social__link"
              >
                <svg
                  class="social__icon"
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#7D92B0"
                    fill-rule="evenodd"
                    d="M2.867 0h18.266A2.876 2.876 0 0 1 24 2.869V21.14A2.868 2.868 0 0 1 21.133 24H2.867A2.868 2.868 0 0 1 0 21.141V2.869A2.876 2.876 0 0 1 2.867 0zm16.258 8.424a1.884 1.884 0 0 0-1.309-1.31c-1.166-.316-5.82-.316-5.82-.316s-4.646 0-5.812.306a1.914 1.914 0 0 0-1.31 1.32C4.57 9.59 4.57 12 4.57 12s0 2.429.306 3.576a1.85 1.85 0 0 0 1.309 1.31c1.176.316 5.811.316 5.811.316s4.655 0 5.821-.306a1.85 1.85 0 0 0 1.31-1.31c.305-1.157.305-3.576.305-3.576s.01-2.42-.306-3.586zm-8.611 5.804L14.384 12l-3.87-2.228v4.456z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="social__item">
              <a
                href="https://t.me/cgitems_ru"
                target="_blank"
                class="social__link"
              >
                <svg
                  class="social__icon"
                  width="24"
                  height="24"
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
            <li class="social__item">
              <a
                href="https://vk.com/cgitems"
                target="_blank"
                class="social__link"
              >
                <svg
                  class="social__icon"
                  width="24"
                  height="24"
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
            <li class="social__item">
              <a
                href="https://wa.me/+79015938910"
                target="_blank"
                class="social__link"
              >
                <svg
                  class="social__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#7D92B0"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.85996 0H21.1321C22.7051 0 24 1.29495 24 2.86794V21.14C24 22.713 22.7051 24 21.1321 24H2.85996C1.28697 24 0 22.713 0 21.14V2.86794C0 1.29495 1.28697 0 2.85996 0ZM8.82622 16.8024L9.07244 16.9533C9.98605 17.4936 11.0188 17.7795 12.0675 17.7795C15.3009 17.7795 17.9305 15.1499 17.9305 11.9166C17.9305 8.67527 15.3009 6.04569 12.0675 6.04569C8.83413 6.04569 6.20453 8.67527 6.20453 11.9166C6.20453 12.9811 6.49853 14.0298 7.06258 14.9513L7.21348 15.2056L6.6256 17.3903L8.82622 16.8024ZM14.7607 12.9176C14.4588 12.7428 14.0775 12.5442 13.72 12.6872C13.4499 12.7984 13.283 13.2195 13.1083 13.434C13.0209 13.5452 12.9096 13.5611 12.7746 13.5055C11.7656 13.1003 10.9871 12.425 10.431 11.4955C10.3357 11.3525 10.3515 11.2413 10.4707 11.1063C10.6375 10.9076 10.852 10.6852 10.8917 10.4151C10.9394 10.145 10.8123 9.83516 10.7011 9.59683C10.566 9.29494 10.4071 8.85799 10.0973 8.69116C9.81925 8.53227 9.4538 8.61967 9.19958 8.82622C8.77058 9.17578 8.56409 9.72394 8.57204 10.2642C8.57204 10.423 8.58788 10.574 8.62761 10.7249C8.71499 11.0824 8.88187 11.4161 9.06459 11.7418C9.20759 11.9801 9.35849 12.2105 9.52533 12.433C10.0655 13.1718 10.7408 13.8073 11.5194 14.284C11.9087 14.5223 12.3217 14.7289 12.7587 14.8719C13.2433 15.0387 13.6803 15.2056 14.2046 15.1023C14.7528 14.999 15.293 14.6574 15.5154 14.1251C15.579 13.9742 15.6107 13.7994 15.571 13.6326C15.4995 13.291 15.0387 13.0844 14.7607 12.9176ZM4.69517 19.3287L5.74379 15.4042C5.14796 14.3317 4.83811 13.1321 4.83811 11.9166C4.83811 7.92849 8.07941 4.67925 12.0675 4.67925C16.0556 4.67925 19.3048 7.92849 19.3048 11.9166C19.3048 15.9047 16.0556 19.146 12.0675 19.146C10.8679 19.146 9.68421 18.8441 8.62761 18.2721L4.69517 19.3287Z"
                  ></path>
                </svg>
              </a>
            </li>

            <li class="social__item">
              <a
                href="https://www.artstation.com/cgitems"
                target="_blank"
                class="social__link"
              >
                <svg
                  class="social__icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.86738 0H21.1326C22.7097 0 24 1.29084 24 2.86853V21.141C24 22.7187 22.7097 24 21.1326 24H2.86738C1.29032 24 0 22.7187 0 21.141V2.86853C0 1.29084 1.29032 0 2.86738 0ZM4.4999 15.518L5.7683 17.6761C6.01492 18.1614 6.53452 18.4994 7.12465 18.4994H15.5363L13.7923 15.518H4.4999ZM12.5416 13.4034L9.14171 7.60542L5.74185 13.4034H12.5416ZM19.4999 15.5354C19.4999 15.2407 19.4118 14.9547 19.2532 14.7294L14.3296 6.29674C14.0742 5.82008 13.5721 5.49937 12.9908 5.49937H10.3837L17.9937 18.4821L19.2005 16.4368C19.4383 16.0468 19.4999 15.8734 19.4999 15.5354Z"
                    fill="#798FAA"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <input type="file" multiple @change="handleFileUpload" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'personal',
  middleware: ['student'],
});

const handleFileUpload = async (event) => {
  const files = event.target.files; // Получаем массив файлов

  // Создание экземпляра объекта FormData
  const formData = new FormData();
  formData.append('name', `name ${Math.random()}`);
  formData.append('projectDescription', 'Описание проекта');
  formData.append('courseId', 1);
  formData.append('projectTypeId', 1);
  formData.append('stageId', 1);

  // Добавляем preview, если это требуется
  if (files.length > 0) {
    formData.append('preview', files[0]);
  }

  // Проходимся по всем файлам и добавляем их в formData под ключом 'media[]'
  Array.from(files).forEach((file) => {
    formData.append('media[]', file);
  });

  try {
    const response = await useAuthFetch('/me/projects', {
      method: 'POST',
      body: formData,
    });

    console.log(response);
  } catch (error) {
    console.error('Произошла ошибка при загрузке:', error);
  }
};

// const response = await useAuthFetch('/projects', {
//   method: 'POST',
//   body: { name: 'test', course_id: 1, project_type_id: 1, stage_id: 2 },
// });
</script>

<style scoped></style>
