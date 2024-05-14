<template>
  <header class="header fixed">
    <div class="header__inner container">
      <div class="logo header-logo">
        <NuxtLink to="/">
          <picture>
            <source srcset="/images/logo-cg-items.svg" type="image/webp" />
            <img class="logo__img" src="/images/logo-cg-items.svg" alt="" />
          </picture>
        </NuxtLink>
      </div>
      <div id="bxdynamic_LkGdQn_start" style="display: none"></div>

      <nav class="header__item menu" data-sidebar="menu" style="left: -100%">
        <ul class="menu__list list">
          <li class="menu__item mobile-search-item">
            <a class="link menu__link search_link" href="/search/">Поиск</a>
          </li>

          <li class="menu__item parent">
            <NuxtLink class="link menu__link active course-link" to="/"
              >Курсы</NuxtLink
            >
            <div class="menu__list-wrapper">
              <ul class="menu__list list">
                <li class="menu__item">
                  <NuxtLink
                    class="link menu__link gas-station_link"
                    to="/gas-station/"
                    >Gas station</NuxtLink
                  >
                </li>

                <li class="menu__item">
                  <a
                    class="link menu__link vehicles-and-props_link"
                    href="/vehicles-and-props/"
                    >Vehicles and Props</a
                  >
                </li>
              </ul>
            </div>
          </li>

          <li class="menu__item">
            <NuxtLink class="link menu__link projects_link" to="/projects/"
              >Работы студентов</NuxtLink
            >
          </li>

          <li class="menu__item parent">
            <NuxtLink class="link menu__link articles_link" to="/articles/"
              >Статьи о 3D</NuxtLink
            >
            <div class="menu__list-wrapper">
              <ul class="menu__list list">
                <li class="menu__item">
                  <NuxtLink
                    class="link menu__link articles_link"
                    to="/articles/"
                    >Список всех статей</NuxtLink
                  >
                </li>

                <li class="menu__item">
                  <a
                    class="link menu__link articles-slang_link"
                    href="/articles/slang/"
                    >Рабочий сленг</a
                  >
                </li>

                <li class="menu__item">
                  <a
                    href="/personal/articles/"
                    onclick="$('.user.user__default').click(); event.preventDefault();"
                    class="link menu__link btn-tr personal-articles_link"
                  >
                    Сохраненные статьи
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li class="menu__item">
            <a class="link menu__link reviews_link" href="/reviews/">Отзывы</a>
          </li>

          <li class="menu__item">
            <button
              class="link menu__link btn-tr contacts-btn"
              data-btn-ajax="modal_contacts"
            >
              Контакты
            </button>
          </li>
        </ul>

        <div class="sidebar__bottom menu-mobile">
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
          <div class="sidebar__bottom-menu">
            <button
              class="button button-green button-g-all button-menu-mobile"
              data-btn-ajax="modal_course"
            >
              Оставить заявку
            </button>
          </div>
        </div>
      </nav>

      <div id="bxdynamic_LkGdQn_end" style="display: none"></div>
      <div class="header__item search-form header__search-form">
        <button class="btn-circle mobile-search">
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.683 6.683a4.68 4.68 0 016.635 0 4.68 4.68 0 011.378 3.322 4.639 4.639 0 01-1.379 3.312 4.638 4.638 0 01-3.312 1.379 4.662 4.662 0 01-3.322-1.379 4.68 4.68 0 01-1.379-3.312 4.72 4.72 0 011.379-3.322zM10.005 3a6.997 6.997 0 00-4.958 2.047A6.997 6.997 0 003 10.005 6.991 6.991 0 0010.005 17c1.479 0 2.86-.462 3.995-1.25L17.25 19 19 17.24l-3.246-3.246A6.988 6.988 0 0017 10.005 6.991 6.991 0 0010.005 3z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <form id="title-search" class="form-search-header" action="/search/">
          <div class="form-search-header__inner">
            <input
              class="form-control form-control-darck form-control-search header__form-control"
              id="title-search-input"
              placeholder="Поиск по статьям"
              type="text"
              name="q"
              value=""
              autocomplete="off"
            />
            <button class="btn-search">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.68264 6.68259C7.52613 5.83909 8.70905 5.30419 10.0051 5.30419C11.3012 5.30419 12.4739 5.83909 13.3174 6.68259C14.1711 7.53637 14.6958 8.70903 14.6958 10.0051C14.6958 11.3012 14.1711 12.4739 13.3174 13.3174C12.4739 14.1712 11.3012 14.6958 10.0051 14.6958C8.70905 14.6958 7.52613 14.1712 6.68264 13.3174C5.83915 12.4739 5.30429 11.3012 5.30429 10.0051C5.30429 8.70903 5.83915 7.53637 6.68264 6.68259ZM10.0051 3C8.07129 3 6.31236 3.78178 5.04712 5.04702C3.78189 6.31227 3 8.07127 3 10.0051C3 11.9287 3.78189 13.6877 5.04712 14.953C6.31236 16.2182 8.07129 17 10.0051 17C11.484 17 12.8656 16.5379 14.0003 15.7494L17.2509 19L19 17.2399L15.7539 13.9938C16.5397 12.8603 17 11.4812 17 10.0051C17 8.07127 16.2182 6.31227 14.953 5.04702C13.6878 3.78178 11.9287 3 10.0051 3Z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <AvatarHeader />

      <button class="menu__btn" data-sidebar-btn="menu">
        <img class="menu__btn-img" src="/images/icons/burger-menu.svg" alt="" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
watch(
  () => route.path,
  (newPath, oldPath) => {
    console.log(`Маршрут изменился с ${oldPath} на ${newPath}`);
  },
);
</script>
