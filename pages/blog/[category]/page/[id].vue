<template>
  <p>Categoria {{categorySource}} pagina {{page}}</p>
</template>

<script setup>
const route = useRoute()
const page = route.params.id
const categorySource = route.params.category
</script>
