<script setup>
import {useNuxtApp} from "#app";
import ETitle from "~/components/elements/ETitle.vue";

const { data } = await useFetch('/api/terms-of-use')
const terms = data.value.terms

const site = useNuxtApp().site
const metas = {
  title: `Termos de uso do site`,
  ogTitle: `Termos de uso do site`,
  description: `Leia os termos de uso do site ${site.title}`,
  ogDescription: `Leia os termos de uso do site ${site.title}`,
  ogImage: site.image
}

useSeoMeta(metas)
useServerSeoMeta(metas)
</script>

<template>
  <e-title>Termos de uso</e-title>
  <div class="mx-auto my-5 p-5 max-w-3xl">
    <div v-html="terms" />
  </div>
</template>
