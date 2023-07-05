<script setup>
const props = defineProps(['image', 'title', 'content'])
</script>

<template>
  <section class="m-auto w-full p-5 md:w-8/12">
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10">
      <div class="mb-6">
        <img class="w-full" :src="image" :alt="`Imagem de ${title}`" />
      </div>
      <div v-html="content"></div>
    </div>
  </section>
</template>
