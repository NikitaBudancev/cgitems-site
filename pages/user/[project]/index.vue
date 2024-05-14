<template>
  <div>{{ stagesData }}</div>
</template>

<script setup lang="ts">
import apiPoints from '~/constants/apiPoints';

const { data: projectData, pending: projectPending } = await useAuthFetch(
  apiPoints.meProjects(),
  {},
  { lazy: true },
);

const { data: stagesData, pending: stagesPending } = await useApiFetch(
  apiPoints.stages,
  {},
  { lazy: true },
);

console.log('user project')
</script>
