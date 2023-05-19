<script setup>
import BlogCard from "~/components/elements/BlogCard.vue";
import Slider from "~/components/elements/Slider.vue";
import {useNuxtApp} from "#app";

const { data } = await useFetch('/api/blog')
const posts = data.value.posts

const site = useNuxtApp().site
const meta = {
  title: site.title,
  ogTitle: site.title,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image
}

useSeoMeta(meta)
useServerSeoMeta(meta)
</script>

<template>
  <main>

    <section class="p-10 bg-teal-50">
      <h2 class="title">Últimos posts</h2>
      <p class="text-center mx-auto my-10 font-serif text-lg font-extralight">Quer se conectar mais a astrologia, de uma olhada nos nossos ultimos posts</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        <blog-card v-for="({name, image, target, description, date},index) in posts" :key="index"
                   :name="name"
                   :image="image"
                   :date="date"
                   :target="target"
                   :description="description" />
      </div>
    </section>

  </main>
</template>
