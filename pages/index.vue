<script setup>
import BlogCard from "~/components/elements/BlogCard.vue";

const { data } = await useFetch('/api/blog')
const posts = data.value.posts
</script>

<template>
  <main>


    <section class="m-4">
      <h2 class="text-center text-3xl">Últimos posts</h2>
      <hr/>
      <p class="text-center">Quer se conectar mais a astrologia, de uma olhada nos nossos ultimos posts</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <blog-card v-for="({name, image, target, description},index) in posts" :key="index"
                   :name="name"
                   :image="image"
                   :target="target"
                   :description="description" />
      </div>

    </section>

  </main>
</template>
