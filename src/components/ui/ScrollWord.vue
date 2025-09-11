<template>
  <span
    :style="{
      opacity: opacity
    }"
    class="mr-3 mt-3 transition-opacity duration-200"
  >
    {{ word }}
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  word: string;
  progress: number;
  range: [number, number];
}

const props = defineProps<Props>();

const opacity = computed(() => {
  const [start, end] = props.range;
  const progress = Math.max(0, Math.min(1, props.progress));
  
  if (progress >= start && progress <= end) {
    const wordProgress = (progress - start) / (end - start);
    return Math.min(1, wordProgress * 3);
  } else if (progress > end) {
    return 1;
  }
  
  return 0.2;
});
</script>