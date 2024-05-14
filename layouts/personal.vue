<template>
  <div>
    <NuxtLoadingIndicator color="blue" />
    <TheHeader />
    <div class="page fixed">
      <div
        class="content content-right container-min container-min-p container-article-detail"
      >
        <SidebarProject />
        <div
          class="content__center-col content__center-col-articles mobile"
          data-sidebar="sidebar-projects-profile"
        >
          <div class="container container-articles">
            <BreadcrumbsMain />
          </div>
          <NuxtPage />
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>
