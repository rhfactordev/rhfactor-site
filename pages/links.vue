<script setup>
import {useNuxtApp} from "#app";

const { data } = await useFetch('/api/links')
const links = data.value.links

const site = useNuxtApp().site
const meta = {
  title: `Conecte-se`,
  ogTitle: `Conecte-se`,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image,
}

useSeoMeta(meta)
useServerSeoMeta(meta)
</script>
<template>
  <main class="bg-teal-600 px-5 py-10">
    <div class="w-full md:w-5/12 lg:4/12 m-auto text-center text-white">

      <img :src="data.image"
           alt="Andreza Ferreira Astróloga"
           class="border-2 border-neutral-100 rounded-full w-40 my-5 mx-auto h-40 object-cover">
      <h1 class="font-extralight font-sans text-md mb-4">{{ data.name }}</h1>

      <p class="font-normal text-md mb-4">{{ data.intro }}</p>

      <a v-for="({name,target},x) in links" :class="{ 'dark' : x==0 }" :key="x" class="linkButton" :title="name" :href="target" target="_blank">{{name}}</a>

      <img class="w-100 mb-4" :src="site.image" :alt="`Logo de ${site.title}`">

      <layout-social :social="site.social" />
    </div>
  </main>
</template>

<style scoped type="postcss">
.linkButton {
  @apply bg-teal-200 p-2 text-neutral-700 w-full block rounded-md mb-3 shadow shadow-inner;
&:hover {
   @apply bg-teal-500 text-white;
 }
&:disabled{
   @apply bg-teal-900 text-gray-400;
 }
 &.dark{
    @apply bg-teal-800 text-white;
  }
}
</style>
