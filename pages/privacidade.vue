<script setup>
const { data } = await useFetch('/api/privacy-policy')
const terms = data.value.terms
</script>

<template>
  <h1>Políticas de Privacidade</h1>
  <div v-html="terms">
  </div>
</template>
