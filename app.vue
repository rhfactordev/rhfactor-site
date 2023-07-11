<script setup>
import {useNuxtApp} from "#app";

const app = useNuxtApp()
const route = useRoute()

const layout = computed(()=>{
  if(route.fullPath === '/links'){
    return false
  }
  return app.site.layout
})
</script>

<template>
  <NuxtLayout :name="layout">
    <nuxt-page/>
  </NuxtLayout>
</template>
