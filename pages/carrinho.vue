<script setup>
import {useNuxtApp} from "#app";
import ETitle from "~/components/elements/ETitle.vue";

const site = useNuxtApp().site
const meta = {
  title: `Carrinho de compras - ${site.title}`,
  ogTitle: `Carrinho de compras - ${site.title}`,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image
}

useSeoMeta(meta)
useServerSeoMeta(meta)

const loading = ref(true)

const refreshCart = async () => {
  loading.value = true
  const { items } = await useFetch('/api/cart')
  loading.value = false
}

onMounted(()=>{
  refreshCart()
})

</script>
<template>
  <main class="p-10 my-10">
    <e-title>Carrinho</e-title>

    <div v-if="loading">
      Aguarde, carregando!
    </div>

    <div v-else>

    </div>

  </main>
</template>
