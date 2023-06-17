<script setup>
import {useNuxtApp} from "#app";
const app = useNuxtApp()
const layout = computed(()=>{
  return app.site.layout
})
</script>

<template>
  <NuxtLayout :name="layout">
    <nuxt-page/>
  </NuxtLayout>
</template>
