<script setup>
import {useNuxtApp} from "#app";

const { data } = await useFetch('/api/privacy-policy')
const terms = data.value.terms

const site = useNuxtApp().site
const metas = {
  title: `Politica de privacidade - ${site.title}`,
  ogTitle: `Politica de privacidade- ${site.title}`,
  description: `Leia a Politica de privacidade do site ${site.title}`,
  ogDescription: `Leia  a Politica de privacidade do site ${site.title}`,
  ogImage: site.image
}

useSeoMeta(metas)
useServerSeoMeta(metas)

</script>
<template>
  <h1 class="text-center m-5 text-4xl text-teal-800">Políticas de Privacidade</h1>
  <div class="mx-auto my-5 p-5 max-w-3xl">
    <div v-html="terms" />
  </div>
</template>
