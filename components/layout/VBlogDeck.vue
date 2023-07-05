<script setup>

import VCardItem from "~/components/layout/VCardItem.vue";
import VTitle from "~/components/layout/VTitle.vue";

const props = defineProps(['title', 'subtitle', 'limit', 'category'])

const posts = ref([])

const itensSize = computed(() => props.size == null ? 2 : props.size )
const itemsList = computed(() => posts.value || [] )
const hasPosts = computed(()=> itemsList.value.length > 0)
const serverUrl = computed(()=>{
  let base = `/api/blog?page=0&limit=${itensSize.value}`
  if( props.category ){
    base += `&category=${props.category}`
  }
  return base
})

const { data } = await useFetch(serverUrl.value)
posts.value = data.value.posts
</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-10">
      <v-title
          :title="title"
          :subtitle="subtitle"
      />
      <div v-if="hasPosts" class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <v-card-item v-for="({ title, subtitle, description, target, image, cta, pre } ,i) in itemsList" :key="i"
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
  </section>
</template>
