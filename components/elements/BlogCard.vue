<script setup>
  defineProps(['image', 'name', 'description', 'target'])
</script>

<template>
  <div
      class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" :key="index">
    <img :src="image" :alt="name" />
    {{name}}
    <hr/>
    <p class="p-2">{{description}}</p>
    <nuxt-link :to="target">Ler mais</nuxt-link>
  </div>
</template>
