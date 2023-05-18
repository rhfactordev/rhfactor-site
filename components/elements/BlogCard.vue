<script setup>
  defineProps(['image', 'name', 'description', 'target', 'date'])
</script>

<template>
  <div class="card">
    <img class="card-image" :src="image" :alt="name" />
    <p class="card-date">{{date}}</p>
    <h3 class="title">
      <nuxt-link class="hover:text-teal-500" :to="target">{{name}}</nuxt-link>
    </h3>
    <p class="content">
      {{description}}
    </p>
    <div class="text-sm text-center p-3 mb-6">
      <nuxt-link class="more" :to="target">Ler mais</nuxt-link>
    </div>

  </div>
</template>
