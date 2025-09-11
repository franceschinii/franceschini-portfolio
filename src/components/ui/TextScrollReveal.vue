<template>
  <div
    ref="textScrollRevealRef"
    :class="cn('relative z-0 h-[50vh]', $props.class)"
  >
    <div class="sticky top-0 mx-auto flex h-1/2 max-w-4xl items-center bg-transparent px-4 py-10">
      <p
        class="flex flex-wrap p-2 text-lg font-medium text-blue-400/30 xl:text-xl lg:p-3 lg:text-lg md:p-2 md:text-lg dark:text-blue-400/30"
      >
        <ScrollWord
          v-for="(word, i) in words"
          :key="i"
          :word="word"
          :progress="scrollYProgress"
          :range="[i / words.length, (i + 1) / words.length]"
        />
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { cn } from "@/lib/utils";
import ScrollWord from "./ScrollWord.vue";

interface Props {
  class?: string;
  text: string;
}

const props = defineProps<Props>();

const textScrollRevealRef = ref<HTMLElement | null>(null);

const words = computed(() => props.text.split(" "));

const scrollYProgress = ref(0);

function updateScrollYProgress() {
  if (textScrollRevealRef.value) {
    const boundingRect = textScrollRevealRef.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    scrollYProgress.value = (boundingRect.y / windowHeight) * -1;
  }
}

onMounted(() => {
  window.addEventListener("scroll", updateScrollYProgress);
  window.addEventListener("resize", updateScrollYProgress);
  updateScrollYProgress();
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScrollYProgress);
  window.removeEventListener("resize", updateScrollYProgress);
});
</script>