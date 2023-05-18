<script setup>
defineProps(["categories"])
</script>
<template>
  <div class="p-5">
    <h2 class="title">Categorias</h2>
    <ul>
      <li v-for="({name, target},index) in categories" :key="index">
        <nuxt-link :to="target">{{name}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
