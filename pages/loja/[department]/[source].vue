<script setup>
const route = useRoute()
const pageSource = computed(()=> route.params.source )
const departmentSource = computed(()=> route.params.department )
</script>

<template>
  <main class="grid grid-cols-4 gap-2">
    <h1> {{departmentSource}} / {{pageSource}}</h1>
  </main>
</template>
