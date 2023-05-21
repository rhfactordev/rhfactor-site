<script setup>
import {useNuxtApp} from "#app";
import BlogCategory from "~/components/elements/BlogCategory.vue";
import ETitle from "~/components/elements/ETitle.vue";

const route = useRoute()
const expand = ref(true)
const quantity = ref(1)
const departmentSource = computed(()=> route.params.department )
const productId = computed(()=> route.params.id )

const serverUrl = computed(()=>`/api/product?id=${productId.value}&department=${departmentSource.value}`)

const { data } = await useFetch(serverUrl.value)
const product = data.value.product
const departments = data.value.departments

const site = useNuxtApp().site
const meta = {
  title: `${product.name}`,
  ogTitle: `${product.name}`,
  description: product.description,
  ogDescription: product.description,
  ogImage: product.image
}

useSeoMeta(meta)
useServerSeoMeta(meta)

const addToCart = () =>{

}
</script>

<template>
  <main class="bg-neutral-100">
    <div class="p-5">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-5xl mx-auto">
        <div class="md:col-span-3 p-5 bg-white shadow">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img :src="product.image" :alt="`Foto do ${product.name}`">
            <div class="mb-4">
              <h1 class="text-lg mb-5 text-teal-600">{{product.name}}</h1>
              <div class="border-b-1" :class="{ 'overflow-hidden' : expand , 'h-80' : expand }" >
                <div v-html="product.description"></div>
              </div>
              <div class="my-5 border drop-shadow p-1 text-center text-teal-400" @click="expand=!expand" >
                {{ expand ? 'Ler mais' : 'Recolher' }}
              </div>
            </div>
          </div>
        </div>
        <div class="p-5 bg-white shadow mb-4">
          <div class=" sticky top-20">
            <p class="text-3xl font-bold mb-0">R$ {{product.price}}</p>
            <p>No cartão de crédito</p>
            <div class="hidden md:block">
              <hr class="mb-4"/>
              <p class="mb-3">Em até 10x no cartão de crédito</p>
              <button type="button" class="w-full btn">Comprar</button>
            </div>
          </div>
        </div>
        <h2 class="my-4">Ficha Técnica</h2>
        <div class="col-span-full p-5 bg-white shadow mb-4">
          <table class="border w-full">
            <tbody>
              <tr v-for="({key,value},index) in product.properties" :key="index" :class="{ 'bg-neutral-100' : index % 2 }">
                <td class="p-2 border-r-1">{{key}}</td>
                <td class="p-2">{{ value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="sticky border-t-4 border-neutral-200 bottom-0 md:hidden p-5 bg-white">
      <p class="text-lg font-bold mb-0">R$ {{product.price}}</p>
      <p class="mb-3">Em até 10x no cartão de crédito</p>
      <button type="button" class="w-full btn">Comprar</button>
    </div>
  </main>
</template>
