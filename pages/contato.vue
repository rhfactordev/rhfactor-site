<script setup>
import ETitle from "~/components/elements/ETitle.vue";
import {useNuxtApp} from "#app";

const site = useNuxtApp().site

const metas = {
  title: `Contato - ${site.title}`,
  ogTitle: `Contato - ${site.title}`,
  description: `Entre em contato conosco pelo e-mail ${site.email} ou pelo whatsapp ${site.phone}`,
  ogDescription: `Entre em contato conosco pelo e-mail ${site.email} ou pelo whatsapp ${site.phone}`,
  ogImage: site.image
}

useSeoMeta(metas)
useServerSeoMeta(metas)
</script>
<template>
  <e-title>Contato</e-title>
</template>
