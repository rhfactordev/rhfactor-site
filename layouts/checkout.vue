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
  <header class="bg-teal-400">
    <div class="container flex justify-between">
      <div class="m-auto md:m-0">
        <nuxt-link to="/">
          <img class="max-w-md" :src="site.image" :alt="`Logo de ${site.title}`">
        </nuxt-link>
      </div>
    </div>
  </header>

  <slot/>

</template>
