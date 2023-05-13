
<template>
  <p>Index categoria {{categorySource}}</p>
</template>

<script setup>
const route = useRoute()
const categorySource = route.params.category
</script>
