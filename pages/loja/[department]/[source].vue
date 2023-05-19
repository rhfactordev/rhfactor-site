<script setup>
import {useNuxtApp} from "#app";

const route = useRoute()
const pageSource = computed(()=> route.params.source )
const departmentSource = computed(()=> route.params.department )

const department = computed(()=>{
  return {
    name : "Loja Virtual",
    description: "Descrição da loja",
    image: "image"
  }
})

const site = useNuxtApp().site
const meta = {
  title: `${department.value.name} - ${site.title}`,
  ogTitle: `${department.value.name} - ${site.title}`,
  description: `${department.value.description}`,
  ogDescription: `${department.value.description}`,
  ogImage: `${department.value.image}`
}

useSeoMeta(meta)
useServerSeoMeta(meta)
</script>

<template>
  <main class="grid grid-cols-4 gap-2">
    <h1> {{departmentSource}} / {{pageSource}}</h1>
  </main>
</template>
