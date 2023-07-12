<script setup>
import {useNuxtApp} from "#app";

const app = useNuxtApp()
const route = useRoute()


const layout = computed(()=>{
  if( route.fullPath.startsWith('/links') ){
    return false
  }
  if( route.fullPath.startsWith('/lp') ){
    return 'lp'
  }
  return app.site.layout
})
</script>

<template>
  <NuxtLayout :name="layout">
    <nuxt-page />
  </NuxtLayout>
</template>
