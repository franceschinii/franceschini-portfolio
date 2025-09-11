<template>
  <div
    :class="[
      'group relative flex overflow-hidden rounded-xl bg-white/10 backdrop-blur-md text-white shadow-lg',
      $props.class,
    ]"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div :class="cn('relative z-10', props.slotClass)">
      <slot></slot>
    </div>
    <!-- Spotlight effect -->
    <div
      class="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      :style="{
        background: backgroundStyle,
        opacity: gradientOpacity,
      }"
    ></div>
    <!-- Frosted glass overlay -->
    <div class="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, type HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"];
    slotClass?: HTMLAttributes["class"];
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
  }>(),
  {
    class: "",
    slotClass: "",
    gradientSize: 150,
    gradientColor: "rgba(255, 255, 255, 0.3)",
    gradientOpacity: 0.6,
  },
);

const mouseX = ref(-props.gradientSize * 10);
const mouseY = ref(-props.gradientSize * 10);

function handleMouseMove(e: MouseEvent) {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  mouseX.value = e.clientX - rect.left;
  mouseY.value = e.clientY - rect.top;
}

function handleMouseLeave() {
  mouseX.value = -props.gradientSize * 10;
  mouseY.value = -props.gradientSize * 10;
}

onMounted(() => {
  mouseX.value = -props.gradientSize * 10;
  mouseY.value = -props.gradientSize * 10;
});

const backgroundStyle = computed(() => {
  return `radial-gradient(
    circle at ${mouseX.value}px ${mouseY.value}px,
    ${props.gradientColor} 0%,
    rgba(255, 255, 255, 0.1) 30%,
    rgba(255, 255, 255, 0) 70%
  )`;
});
</script>