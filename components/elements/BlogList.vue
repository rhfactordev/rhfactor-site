<script setup>
import BlogCard from "~/components/elements/BlogCard.vue";

const props = defineProps(['title', 'subtitle', 'component'])

const { data } = await useFetch('/api/blog?limit=3')
const posts = data.value.posts

</script>

<template>
  <section class="m-auto px-10">
    <h2 class="title">{{title}}</h2>
    <p class="text-center mx-auto my-10 font-serif text-lg font-extralight">{{subtitle}}</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:mx-28 xl:mx-40">
      <blog-card v-for="({title, image, target, description, date},index) in posts" :key="index"
                 :name="title"
                 :image="image"
                 :date="date"
                 :target="target"
                 :description="description" />
    </div>
  </section>
</template>
