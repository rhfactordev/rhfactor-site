<script setup>
import BlogCard from "~/components/elements/BlogCard.vue";
import NavPagination from "~/components/elements/NavPagination.vue";
import ETitle from "~/components/elements/ETitle.vue";
import BlogCategory from "~/components/elements/BlogCategory.vue";
import {useNuxtApp} from "#app";

const route = useRoute()
const page = computed(()=> route.params.id >= 1 ? route.params.id : 1 )
const categorySource = route.params.category

const { data } = await useFetch('/api/blog')
const categories = data.value.categories
const posts = data.value.posts
const categoryName = computed(()=>{
  return "Blog"
})

const hasCategory = computed(()=> categorySource != null)

const path = computed(()=>{
  if( hasCategory.value ){
    return `/blog/${categorySource}`
  }
  return '/blog'
})

const site = useNuxtApp().site
const metas = {
  title: `${categoryName.value} - ${site.title}`,
  ogTitle: `${categoryName.value} - ${site.title}`,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image
}

useSeoMeta(metas)
useServerSeoMeta(metas)
</script>
<template>
  <main class="grid grid-cols-4 gap-0">
    <e-title class="col-span-4">
      {{ hasCategory ? categorySource : 'Blog'  }}
    </e-title>
    <div class="col-span-4 md:col-span-3 p-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <blog-card v-for="({name, image, target, description, date},index) in posts" :key="index"
                   :name="name"
                   :date="date"
                   :image="image"
                   :target="target"
                   :description="description" />
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
