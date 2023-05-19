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
  title: `${post.name} - ${site.title}`,
  ogTitle: `${post.name} - ${site.title}`,
  description: post.description,
  ogDescription: post.description,
  ogImage: post.image
}

useSeoMeta(meta)
useServerSeoMeta(meta)

</script>
<template>
  <main class="grid grid-cols-4 gap-0">
    <e-title class="col-span-4">{{post.name}}</e-title>
    <div class="col-span-4 md:col-span-3 p-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-html="post.content">
        </div>
      </div>
      <div class="text-center my-3">
        <nav-pagination :path="path"
                        :pages="5"
                        :current="page"
        />
      </div>
    </div>
    <aside class="col-span-4 md:col-span-1">
      <div class="md:sticky top-0">
        <blog-category :categories="categories" />
      </div>
    </aside>
  </main>
</template>
