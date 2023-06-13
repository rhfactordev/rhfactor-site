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
  <header>

    <div class="bg-teal-600 text-white text-sm">
      <div class="container justify-between hidden md:flex">
        <div>
          <Icon class="text-white" name="mdi:phone" /> {{site.phone}}
        </div>
        <div class="p-1">
          <layout-social class="text-xs" :social="site.social" />
        </div>
      </div>
    </div>
    <div class="bg-teal-400">
      <div class="container flex justify-between">
        <div class="m-auto md:m-0">
          <nuxt-link to="/">
            <img class="max-w-md max-h-12 md:max-h-full" :src="site.image" :alt="`Logo de ${site.title}`">
          </nuxt-link>
        </div>
        <div class="hidden md:inline-flex py-10">
          <nuxt-link class="text-neutral-50 hover:text-teal-900" to="/">Visitar o site</nuxt-link>
        </div>
      </div>
    </div>
  </header>

  <slot/>

</template>
