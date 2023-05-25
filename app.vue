<script setup>
import {useNuxtApp} from "#app";

const { layout : template } = useNuxtApp().site
const route = useRoute()

const layout = computed(()=>{
  if( route.fullPath == '/links' ){
    return 'none'
  }
  return template
})
</script>
<template>
  <NuxtLayout :name="layout">
    <nuxt-page/>
  </NuxtLayout>
</template>
