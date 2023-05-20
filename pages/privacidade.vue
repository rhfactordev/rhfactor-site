<script setup>
import {useNuxtApp} from "#app";
import ETitle from "~/components/elements/ETitle.vue";

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
  <e-title>Política de privacidade</e-title>
  <div class="mx-auto my-5 p-5 max-w-3xl">
    <div v-html="terms" />
  </div>
</template>
