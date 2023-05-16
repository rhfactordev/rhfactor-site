<script setup>
const route = useRoute()
const pageSource = computed(()=> route.params.source )
const categorySource = route.params.category

const { data } = await useFetch('/api/blog', {
  method: 'POST',
  body: {
    category : categorySource,
    page : pageSource
  }
})

const categories = data.value.categories
const post = data.value.post
</script>
<template>

  <main class="grid grid-cols-4 gap-2">
    <div class="col-span-4 bg-amber-500">
      <h1>{{post.name}}</h1>
    </div>
    <div class="col-span-4 md:col-span-3 bg-emerald-200">
      <div v-html="post.content">
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
