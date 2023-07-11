<script setup>
  import VTitle from "~/components/layout/VTitle.vue";

  defineProps(['image', 'title', 'content'])
</script>
<template>
  <section>
    <div class="container mx-auto px-10 py-20">
      <v-title :title="title" size="4" />
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="md:order-2">
          <img class="w-full mb-5" :src="image" :alt="`Imagem para ${title}`" />
        </div>
        <div class="pr-5 mb-5">
          <div v-html="content"></div>
        </div>
      </div>
    </div>
  </section>
</template>
