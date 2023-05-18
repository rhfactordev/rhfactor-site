
<script setup>
import ETitle from "~/components/elements/ETitle.vue";
import {useNuxtApp} from "#app";

const site = useNuxtApp().site
const meta = {
  title: `Loja Virtual - ${site.title}`,
  ogTitle: `Loja Virtual - ${site.title}`,
  description: `Conheça e adquira os produtos de ${site.title}`,
  ogDescription: `Conheça e adquira os produtos de ${site.title}`,
  ogImage: site.image
}

useSeoMeta(meta)
useServerSeoMeta(meta)

</script>


<template>
  <e-title>Loja</e-title>
</template>
