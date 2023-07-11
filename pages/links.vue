<script setup>
import {useNuxtApp} from "#app";
import VSocial from "~/components/layout/VSocial.vue";

const site = useNuxtApp().site

const links = computed(() => site.links)
const social = computed(() => site.social)

const metatags = computed(() => ({
  title: `Links`,
  ogTitle: `Links`,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image,
}))

useSeoMeta(metatags.value)
useServerSeoMeta(metatags.value)
</script>
<template>
  <header class="bg-neutral-200">
    <div class="container text-center mx-auto">
      <img class="w-96 mx-auto mb-3 " :src="site.image" :alt="`Logo ${site.title}`">
    </div>
  </header>
  <main>
    <section class="container mx-auto">
      <img class="w-48 mx-auto mb-3 rounded-full " :src="site.profileImage" :alt="`Profile image for ${site.title}`">
      <div class="mx-auto w-9/12 text-sm">
        <p>{{site.description}}</p>
      </div>
      <ul class="text-center mx-auto w-full sm:w-10/12 p-5">
        <li class="rounded-lg shadow bg-neutral-200 transition-colors hover:bg-neutral-400 border border-neutral-300 mb-3 py-3" v-for="({name, target, icon}, i) in links" :key="i">
          <IconCSS class="mr-3" v-if="icon.length > 2" :name="icon" />
          <nuxt-link :to="target" target="_blank">{{name}}</nuxt-link>
        </li>
      </ul>
    </section>
  </main>
  <footer class="bg-neutral-900">
    <v-social class="py-5" :social="social" />
    <div class="bg-neutral-900 pb-10">
      <img class="w-96 m-auto" :src="site.image" :alt="`Logo ${site.title}`">
    </div>
  </footer>
</template>
