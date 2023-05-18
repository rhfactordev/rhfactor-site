<script setup>
import ETitle from "~/components/elements/ETitle.vue";
import {useNuxtApp} from "#app";
const route = useRoute()
const pageSource = computed(()=> route.params.source )

const service = {
  name : `Serviço ${pageSource.value}`,
  description: "Descrição curta do serviço",
  image: ""
}

const site = useNuxtApp().site
const meta = {
  title: `${service.name} - ${site.title}`,
  ogTitle: `${service.name} - ${site.title}`,
  description: service.description,
  ogDescription: service.description,
  ogImage: service.image
}

useSeoMeta(meta)
useServerSeoMeta(meta)

</script>

<template>
  <e-title>{{pageSource}}</e-title>
</template>


