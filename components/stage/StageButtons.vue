<template>
  <div v-if="!pending" class="panel-bar">
    <div class="panel-bar-elements">
      <ButtonMain
        v-for="stage in data.result"
        :key="stage.id"
        @click="changeStage(stage.id)"
        :class="{
          'bar-element': true,
          'bar-element-project': true,
          active: activeStageId === stage.id,
        }"
        type="button"
      >
        <span class="bar-element-title">{{ stage.name }}</span>
        <span class="bar-element-subtitle">{{ stage.count }}</span>
      </ButtonMain>
    </div>
  </div>
</template>

<script setup lang="ts">
import apiPoints from '~/constants/apiPoints';

const { data, pending } = await useApiFetch(apiPoints.stages);

const props = defineProps<{ activeStageId: number | null }>();

const emit = defineEmits<{
  (e: 'changeActiveStage', stageId: number): void;
}>();

const changeStage = (stageId: number) => {
  emit('changeActiveStage', stageId);
};
</script>
