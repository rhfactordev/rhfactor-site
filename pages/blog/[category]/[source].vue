<template>
  <p>Detalhar post {{categorySource}} {{ source }}</p>
</template>

<script setup>
const route = useRoute()
const source = route.params.source
const categorySource = route.params.category
</script>
