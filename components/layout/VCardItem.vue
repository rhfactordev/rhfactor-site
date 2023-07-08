<script setup lang="ts">
const props = defineProps(['pre','title', 'subtitle', 'target', 'description', 'cta', 'image'])
const hasImage = computed(()=> props.image != null)
const hasPre = computed(()=> props.pre != null)

const hasTarget = computed(()=> props.target && props.target.length > 2)

</script>

<template>
  <div class="border bg-white border-gray-200 shadow hover:bg-neutral-100 transition-colors">
    <img v-if="hasImage" class="rounded-t-lg z-10" :src="image" :alt="`Image for ${title}`" />
    <div v-if="hasPre" class="bg-cyan-100 p-1 text-sm text-neutral-600 text-right">{{pre}}</div>
    <nuxt-link :to="target">
      <h5 class="text-2xl font-semibold tracking-tight text-gray-900 py-3 px-5">{{ title }}</h5>
      <p class="text-sm tracking-tight text-gray-900 mb-5 px-5">{{subtitle}}</p>
    </nuxt-link>
    <p class="mb-3 text-sm font-normal text-gray-500 dark:text-gray-400 p-5">{{description}}</p>
    <nuxt-link v-if="hasTarget" class="inline-flex items-center hover:underline px-5 mb-5" :to="target">
      {{ cta || 'Ver mais' }}
      <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </nuxt-link>
  </div>
</template>
