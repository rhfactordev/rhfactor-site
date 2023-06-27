<script setup>
defineProps(['topics'])
</script>
<template>
  <div class="md:-mt-24 lg:-mt-48">
    <div class="container mx-auto">
      <div class="flex flex-wrap md:flex-nowrap">
        <div v-for="({pre, title, description}, i) in topics"
             :key="i"
             class="bg-cyan-200 hover:bg-cyan-500 transition-colors w-full p-10 mx-3 mb-3">
          <p class="text-cyan-800 font-bold text-3xl">{{pre}}</p>
          <p class="font-bold mb-3">{{title}}</p>
          <p class="text-sm">{{description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
