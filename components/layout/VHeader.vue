<script setup>
import {useNuxtApp} from "#app";

const site = useNuxtApp().site

</script>

<template>
  <header>
    <div class="container mx-auto px-10">
      <div class="flex flex-wrap justify-between">
        <nuxt-link class="max-w-[245px] sm:max-w-full" to="/">
          <img class="w-full max-w-sm" :src="site.image" :alt="`Logo de ${site.title}`">
        </nuxt-link>
      </div>
    </div>
  </header>
</template>
