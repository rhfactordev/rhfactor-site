<template>
  <h1>Minha conta</h1>
</template>

<script setup>
definePageMeta({
  middleware: ['auth'],
  layout: 'authenticated'
});
</script>
