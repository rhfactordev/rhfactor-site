<template>
  <p>Sem Categoria pagina {{page}}</p>
</template>

<script setup>
const route = useRoute()
const page = route.params.id
</script>
