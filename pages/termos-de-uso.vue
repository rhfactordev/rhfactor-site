<script setup>
const { data } = await useFetch('/api/terms-of-use')
const terms = data.value.terms
</script>

<template>
  <h1>Termos de uso do site</h1>
  <div v-html="terms">
  </div>
</template>
