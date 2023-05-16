<script setup>
import BlogCard from "~/components/elements/BlogCard.vue";
import NavPagination from "~/components/elements/NavPagination.vue";

const route = useRoute()
const page = computed(()=> route.params.id >= 1 ? route.params.id : 1 )
const categorySource = route.params.category

const { data } = await useFetch('/api/blog')
const categories = data.value.categories
const posts = data.value.posts

const hasCategory = computed(()=> categorySource != null)

const path = computed(()=>{
  if( hasCategory.value ){
    return `/blog/${categorySource}`
  }
  return '/blog'
})

</script>
<template>
  <main class="grid grid-cols-4 gap-2">
    <div class="col-span-4 bg-amber-500">
      <h1>{{ hasCategory ? categorySource : 'Blog'  }}</h1>
      <p>Você está na página {{page}}</p>
    </div>
    <div class="col-span-4 md:col-span-3 bg-emerald-200">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <blog-card v-for="({name, image, target, description},index) in posts" :key="index"
                   :name="name"
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
    <div class="bg-orange-400 col-span-4 md:col-span-1">
      <div class="md:sticky top-0">
        <div class="p-5">
          <h2>Categorias</h2>
          <ul>
            <li v-for="({name, target},index) in categories" :key="index">
              <nuxt-link :to="target">{{name}}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
