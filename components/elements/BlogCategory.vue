<script setup>
defineProps(["categories","title"])
</script>
<template>
  <div class="p-5">
    <h2 class="title">{{title}}</h2>
    <ul>
      <li v-for="({name, target},index) in categories" :key="index">
        <nuxt-link class="font-serif text-sm pl-4" :to="target">{{name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
