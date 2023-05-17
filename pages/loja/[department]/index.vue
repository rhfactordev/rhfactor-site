<script setup>
const route = useRoute()
const departmentSource = computed(()=> route.params.department )
</script>

<template>
  <main class="grid grid-cols-4 gap-2">
    <h1>Index do {{departmentSource}}</h1>
  </main>
</template>
