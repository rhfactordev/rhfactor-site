<script setup>
import BlogCategory from "~/components/elements/BlogCategory.vue";
import {useNuxtApp} from "#app";
import VHeaderBreadcrumb from "~/components/layout/VHeaderBreadcrumb.vue";
import VCardItem from "~/components/layout/VCardItem.vue";

const site = useNuxtApp().site
const route = useRoute()

const categorySource = route.params.category

const page = computed(()=> route.params.id >= 1 ? route.params.id : 1 )
const serverUrl = computed(()=>{
  let base = `/api/blog?page=${page.value}&limit=6`
  if( categorySource ){
    base += `&category=${categorySource}`
  }
  return base
})

const { data } = await useFetch(serverUrl.value)

const categories = data.value.categories
const posts = data.value.posts
const pages = data.value.pages
const empty = data.value.empty

const categoryName = computed(()=>{
  if( hasCategory.value ){
    return categories.filter(it=>it.source == categorySource)[0].name
  }
  return "Blog"
})

const hasCategory = computed(()=> categorySource != null)

const path = computed(()=>{
  if( hasCategory.value ){
    return `/blog/${categorySource}`
  }
  return '/blog'
})

const items = computed(()=>{
  const itemsList = [
    {to: '/', label: 'Home'},
    {to: '/blog', label: 'Blog'},
  ]
  if( hasCategory.value ){
    itemsList.push({to: path.value, label: categoryName.value },)
  }
  return JSON.stringify(itemsList)
})

const metas = {
  title: `${categoryName.value}`,
  ogTitle: `${categoryName.value}`,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image
}

useSeoMeta(metas)
useServerSeoMeta(metas)
</script>
<template>
  <main>
    <VHeaderBreadcrumb class="bg-neutral-200"
                       :title="categoryName"
                       :items="items"
    />
    <section class="py-20">
      <div class="container mx-auto px-10">
        <div class="flex">
          <!-- Listagem -->
          <div>
            <div v-if="!empty" class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <v-card-item v-for="({ title, subtitle, description, target, image, cta, pre } ,i) in posts" :key="i"
                           :title="title"
                           :subtitle="subtitle"
                           :description="description"
                           :target="target"
                           :image="image"
                           :cta="cta"
                           :pre="pre"
              />
            </div>
            <div v-else>
              <p>Nenhum post encontrado nesta categoria</p>
            </div>
          </div>
          <!-- Navegação lateral -->
          <aside class="col-span-4 md:col-span-1">
            <div class="md:sticky top-10">
              <blog-category title="Categorias" :categories="categories" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
