<script setup>
import {useNuxtApp} from "#app";

const site = useNuxtApp().site

useServerHead({
  titleTemplate: `%s - ${site.title}`,
  htmlAttrs : {
    lang : 'pt-BR'
  }
})

</script>

<template>
  <div class="sticky top-40 bg-teal-100 p-10">
    Header
  </div>


  <slot/>

</template>
