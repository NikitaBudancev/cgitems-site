<template>
  <div class="page fixed home">
    <div class="courses course courses-section">
      <div class="courses__inner container__main">
        <div class="courses__subtitle">АВТОРСКОЕ ОБУЧЕНИЕ</div>
        <div class="courses__title">ДОСТИГНИ УРОВНЯ СОЗДАВАЯ ИГРЫ</div>
        <div class="courses__title-text">
          Пройди обучение и получи профессиональный опыт
          <span class="block"
            >у преподавателя-практика с опытом более 6 лет в игровой
            индустрии</span
          >
        </div>

        <div class="courses__title-min courses__title-list">Мои курсы</div>

        <div class="courses__list">
          <div class="courses__item courses__item-easy">
            <div class="courses__item-inner">
              <NuxtLink class="link-full-block" to="/courses/gas-station/">
                Gas Station
              </NuxtLink>
              <div class="courses__item-top">
                <div class="courses__item-title">Gas Station</div>
                <div class="courses__item-badge">
                  <span
                    class="course-category-val"
                    style="background-color: #00af31"
                  >
                    Easy
                  </span>
                </div>
                <div class="courses__item-text">
                  Курс рассчитан на начинающих, и тех, кто хочет понять как
                  правильно подходить к созданию игровых 3D моделей с нуля. Вы
                  можете начать обучение не имея опыта в 3D моделировании и
                  пройти все этапы под моим руководством.
                </div>
              </div>
              <div class="courses__item-bottom">
                <div class="courses__item-buttons">
                  <NuxtLink
                    class="btn btn-tr btn-icon btn-border courses__item-button"
                    to="/courses/gas-station/"
                    >подробнее</NuxtLink
                  >
                  <button
                    class="btn btn-course orange-bg diagonal_swipe_left courses__item-button"
                    data-course="Gas Station"
                    data-btn-ajax="modal_course"
                  >
                    оставить заявку
                  </button>
                </div>
                <div class="courses__item-date">
                  Начало обучения
                  <span class="bold active blink"> 7 декабря 2023г. </span>
                </div>
              </div>
            </div>
          </div>

          <div class="courses__item courses__item-medium">
            <div class="courses__item-inner">
              <NuxtLink
                class="link-full-block"
                to="/courses/vehicles-and-props/"
              >
                Vehicles and Props
              </NuxtLink>
              <div class="courses__item-top">
                <div class="courses__item-title">Vehicles and Props</div>
                <div class="courses__item-badge">
                  <span
                    class="course-category-val"
                    style="background-color: #d1931b"
                  >
                    Medium
                  </span>
                </div>
                <div class="courses__item-text">
                  Курс подойдёт только тем, кто имеет опыт в 3D моделировании.
                  Хочет освоить технику создания сложной 3D модели и по
                  завершению обучения сделать несколько курсовых работ в
                  портфолио.<br />
                </div>
              </div>
              <div class="courses__item-bottom">
                <div class="courses__item-buttons">
                  <NuxtLink
                    class="btn btn-tr btn-icon btn-border courses__item-button"
                    to="/courses/vehicles-and-props/"
                    >подробнее</NuxtLink
                  >
                  <button
                    class="btn btn-course orange-bg diagonal_swipe_left courses__item-button"
                    data-course="Vehicles and Props"
                    data-btn-ajax="modal_course"
                  >
                    оставить заявку
                  </button>
                </div>
                <div class="courses__item-date">
                  Начало обучения
                  <span class="bold"> 16 марта 2024г. </span>
                </div>
              </div>
            </div>
          </div>

          <div class="courses__item courses__item-hard">
            <div class="courses__item-inner">
              <a
                class="link-full-block"
                target="_blank"
                href="https://vk.com/cgitems?w=product-205826889_9332294"
              >
                Environment Artist
              </a>
              <div class="courses__item-top">
                <div class="courses__item-title">Environment Artist</div>
                <div class="courses__item-badge">
                  <span
                    class="course-category-val"
                    style="background-color: #ff0000"
                  >
                    Hard
                  </span>
                </div>
                <div class="courses__item-text">
                  До курса допускаются студенты, прошедшие курс "Gas Station"
                  или "Vehicles and Props". Обучение имитирует рабочий процесс в
                  студии.
                </div>
              </div>
              <div class="courses__item-bottom">
                <div class="courses__item-buttons">
                  <a
                    class="btn btn-tr btn-icon btn-border courses__item-button"
                    href="https://vk.com/cgitems?w=product-205826889_9332294"
                    >подробнее</a
                  >
                  <button
                    class="btn btn-course orange-bg diagonal_swipe_left courses__item-button"
                    data-course="Environment Artist"
                    data-btn-ajax="modal_course"
                  >
                    оставить заявку
                  </button>
                </div>
                <div class="courses__item-date">
                  Начало обучения
                  <span class="bold">
                    <span class="bold">Опционально</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            class="courses__item courses__item-image"
            data-course="Lead на час"
            data-btn-ajax="modal_course"
          >
            <div class="courses__item-inner">
              <div class="courses__item-top">
                <div class="courses__item-cols">
                  <div class="courses__item-col courses__item-col-left">
                    <img
                      class="courses__item-img adaptive-img"
                      src="/images/home/course-author/author-photo.png"
                      alt=""
                    />
                  </div>
                  <div class="courses__item-col courses__item-col-right">
                    <div class="courses__item-title courses__item-title-img">
                      Lead на час
                    </div>
                    <div class="courses__item-badge courses__item-badge-img">
                      <span
                        class="course-category-val"
                        style="background-color: #3757ff"
                        >CGITEMS TEAM</span
                      >
                    </div>
                  </div>
                </div>
                <div class="courses__item-text">
                  <div class="courses__item-text-block">
                    Объясню как грамотно выполнить тестовое задание.
                  </div>
                  <div class="courses__item-text-block">
                    Дам фидбек по твоей работе и рекомендации на дальнейшее
                    самостоятельное развитие.
                  </div>
                  <div class="courses__item-text-block">
                    Разберу твоё портфолио с точки
                    <span class="block"
                      >зрения игровой индустрии и подскажу</span
                    >
                    как стоит правильно его формировать
                  </div>
                </div>
              </div>
              <div class="courses__item-bottom">
                <div class="courses__item-buttons courses__item-buttons-img">
                  <button
                    class="btn btn-course orange-bg diagonal_swipe_left courses__item-button"
                  >
                    оставить заявку
                  </button>
                </div>
                <div class="courses__item-date">
                  Стоимость
                  <span class="bold"> 3 500 ₽ </span>
                </div>
              </div>
            </div>
          </div>
          <div
            class="courses__item courses__item-image"
            data-course="Беседа с HR"
            data-btn-ajax="modal_course"
          >
            <div class="courses__item-inner">
              <div class="courses__item-top">
                <div class="courses__item-cols">
                  <div class="courses__item-col courses__item-col-left">
                    <img
                      class="courses__item-img adaptive-img"
                      src="/images/home/hr.png"
                      alt=""
                    />
                  </div>
                  <div class="courses__item-col courses__item-col-right">
                    <div class="courses__item-title courses__item-title-img">
                      Беседа с HR
                    </div>
                    <div class="courses__item-badge courses__item-badge-img">
                      <span
                        class="course-category-val"
                        style="background-color: #3757ff"
                        >CGITEMS TEAM</span
                      >
                    </div>
                  </div>
                </div>
                <div class="courses__item-text">
                  <div class="courses__item-text-block">
                    Помогу подготовить грамотное резюме;
                  </div>
                  <div class="courses__item-text-block">
                    Расскажу какие ресурсы использовать для поиска работы;
                  </div>
                  <div class="courses__item-text-block">
                    Поделюсь советами для общения на собеседовании
                  </div>
                  <div class="courses__item-text-block">
                    Расскажу какие этапы коммуникации бывают до получения оффера
                  </div>
                </div>
              </div>
              <div class="courses__item-bottom">
                <div class="courses__item-buttons courses__item-buttons-img">
                  <button
                    class="btn btn-course orange-bg diagonal_swipe_left courses__item-button"
                  >
                    оставить заявку
                  </button>
                </div>
                <div class="courses__item-date">
                  Стоимость
                  <span class="bold"> 2 000 ₽ </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="section-content video-section video-section-index">
      <div class="container__main">
        <div class="video-section__cols">
          <div class="video-section__col">
            <div class="title-container-main">
              <h2 class="title title__main">Делюсь опытом</h2>
              <div class="subtitle subtitle__main">
                У меня ты получишь информацию, которой не принято
                <span class="block"
                  >делиться в свободном доступе и большинстве сторонних</span
                >
                3D школ и онлайн курсов
              </div>
            </div>
            <div class="video__text">
              Здесь ты узнаешь все тонкости разработки полноценной игровой
              <div class="block">
                модели и на практике пройдешь все этапы по её созданию. Каждый
              </div>
              <div class="block">
                студент делает свою уникальную модель под моим чутким
              </div>
              руководством.
            </div>
          </div>
          <div class="video-section__col">
            <div class="video video--enabled">
              <a class="video__link">
                <picture>
                  <source
                    srcset="
                      https://i.ytimg.com/vi_webp/uJuZIggBnkY/maxresdefault.webp
                    "
                    type="image/webp"
                  />
                  <img
                    class="video__media"
                    loading="lazy"
                    src="https://i.ytimg.com/vi/uJuZIggBnkY/maxresdefault.jpg"
                    alt="Как я начинал свою карьеру в Gamedev. Николай Андрианов"
                  />
                </picture>
              </a>
              <button class="video__button" aria-label="Запустить видео">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="175"
                  height="123"
                  viewBox="0 0 175 123"
                  fill="none"
                >
                  <g filter="url(#filter0_d_2149_89615)">
                    <rect
                      class="video__button-shape"
                      x="13"
                      y="13"
                      width="149"
                      height="97"
                      rx="25"
                    ></rect>
                    <path
                      class="video__button-icon"
                      d="M110.472 59.5319C111.993 60.7566 111.993 63.0724 110.472 64.2971L79.7051 89.0861C78.3706 90.1613 76.3855 89.2114 76.3855 87.4977L76.3855 36.3313C76.3855 34.6176 78.3706 33.6678 79.7051 34.7429L110.472 59.5319Z"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_2149_89615"
                      x="0.761147"
                      y="0.761147"
                      width="173.478"
                      height="121.478"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset></feOffset>
                      <feGaussianBlur stdDeviation="6.11943"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2149_89615"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2149_89615"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

console.log('index');
// useHead({
//   script: [
//     {
//       src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
//       type: "text/javascript",
//       async: true,
//     },
//   ]
// });
</script>
