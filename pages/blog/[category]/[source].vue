<script setup>
import ETitle from "~/components/elements/ETitle.vue";
import BlogCategory from "~/components/elements/BlogCategory.vue";
import {useNuxtApp} from "#app";

const route = useRoute()
const pageSource = computed(()=> route.params.source )
const categorySource = computed(()=> route.params.category)
const serverUrl = computed(()=>{
  let base = `/api/blog?`
  if( categorySource ){
    base += `&category=${categorySource.value}`
  }
  if(pageSource){
    base += `&post=${pageSource.value}`
  }
  return base
})

const { data } = await useFetch(serverUrl)

const categories = data.value.categories
const post = data.value.post

const site = useNuxtApp().site
const meta = {
  title: `${post.title}`,
  ogTitle: `${post.title}`,
  description: post.description,
  ogDescription: post.description,
  ogImage: post.image
}

useSeoMeta(meta)
useServerSeoMeta(meta)

</script>
<template>
  <main class="grid grid-cols-6 gap-0">
    <e-title class="col-span-full">{{post.title}}</e-title>
    <div class="col-span-full lg:col-span-2 p-4">
      <img class="w-full" :src="post.image" :alt="`Imagem para o ${post.title}`">
    </div>
    <div class="col-span-full lg:col-span-2 p-10">
      <div v-html="post.content"></div>
    </div>
    <aside class="col-span-full md:col-span-1">
      <div class="md:sticky top-10">
        <blog-category title="Categorias" :categories="categories" />
      </div>
    </aside>
  </main>
</template>
