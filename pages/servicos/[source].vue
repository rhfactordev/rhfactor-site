<script setup>
const route = useRoute()
const pageSource = computed(()=> route.params.source )
</script>

<template>
  <main class="grid grid-cols-4 gap-2">
    <h1>{{pageSource}}</h1>
  </main>
</template>
