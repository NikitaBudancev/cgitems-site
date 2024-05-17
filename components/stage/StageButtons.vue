<template>
  <div v-if="!pending" class="panel-bar">
    <div class="panel-bar-elements">
      <ButtonMain
        v-for="stage in data.result"
        :key="stage.id"
        @click="changeStage(stage.id)"
        :class="[
          'bar-element',
          'bar-element-project',
          { active: activeStage === stage.id },
        ]"
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

const props = defineProps<{
  activeStageId: number | 0;
}>();

const emit = defineEmits<{ (e: 'changeActiveStage', stageId: number): void }>();

const activeStage = ref(props.activeStageId || 0);

const { data, pending } = await useApiFetch(apiPoints.stages);

const changeStage = (stageId: number) => {
  if (activeStage.value === stageId) return;

  activeStage.value = stageId;
  emit('changeActiveStage', stageId);
};
</script>
