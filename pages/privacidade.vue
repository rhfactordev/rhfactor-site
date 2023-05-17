<script setup>
const { data } = await useFetch('/api/privacy-policy')
const terms = data.value.terms
</script>
<template>
  <h1 class="text-center m-5 text-4xl text-teal-800">Políticas de Privacidade</h1>
  <div class="mx-auto my-5 p-5 max-w-3xl">
    <div v-html="terms" />
  </div>
</template>
