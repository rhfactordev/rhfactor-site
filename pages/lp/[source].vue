<script setup>
const route = useRoute()
const source = computed(() => route.params.source)

const { data } = await useFetch(`/api/lp`,{
  params:{
    source
  }
})

definePageMeta({
  layout: 'lp'
});
</script>

<template>
  <h1>Vem a landing</h1>
  <p>{{ source }}</p>

  <p v-for="i in 30" :key="i">Conteúdo {{i}}</p>
</template>
