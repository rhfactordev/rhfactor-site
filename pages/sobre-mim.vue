
<script setup>
import ETitle from "~/components/elements/ETitle.vue"
import {useNuxtApp} from "#app";

const site = useNuxtApp().site
const metas = {
  title: `Sobre mim - ${site.title}`,
  ogTitle: `Sobre mim - ${site.title}`,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image
}

useSeoMeta(metas)
useServerSeoMeta(metas)
</script>

<template>
  <e-title>Sobre Mim</e-title>
</template>
