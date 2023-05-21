<script setup>
import {useNuxtApp} from "#app";
import ETitle from "~/components/elements/ETitle.vue";

const site = useNuxtApp().site
const meta = {
  title: `Carrinho de compras`,
  ogTitle: `Carrinho de compras`,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image
}

useSeoMeta(meta)
useServerSeoMeta(meta)


const cart = ref({
  total : 0,
  items : [],
})


const loading = ref(false)
const refreshCart = async () => {
  if( loading.value ){
    return
  }
  loading.value = true
  const { data: responseCart } = await useFetch('/api/cart')
  loading.value = false
  cart.value = responseCart.value
}

const decreaseQuantity = async ( quantity ) => {
  if( loading.value ){
    return
  }
  loading.value = true
  const { data: responseCart } = await useFetch('/api/cart')
  loading.value = false
  cart.value = responseCart.value
}

const increaseQuantity = async ( quantity ) => {
  if( loading.value ){
    return
  }
  loading.value = true
  const { data: responseCart } = await useFetch('/api/cart')
  loading.value = false
  cart.value = responseCart.value
}

onMounted(() => {
  refreshCart()
})

</script>
<template>
  <main class="bg-gray-100 p-5">
    <div class="container mx-auto mt-10">
      <e-title>Carrinho</e-title>
      <div class="mx-5">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
          <div class="bg-white md:col-span-2 p-5 shadow-md rounded-lg">

            <div class="flex flex-row-reverse">
              <button :disabled="loading" type="button" class="btn p-1" @click="refreshCart">
                <Icon name="mdi:refresh" />
              </button>
            </div>

            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Item</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantidade</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Preço</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
            </div>

            <div v-for="({id, name, quantity, price, total, target},index) in cart.items" :key="index" class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div class="flex w-2/5">
                <div class="w-20">
                  <img class="h-24" src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z" alt="">
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm">{{ name }}</span>
<!--                  <span class="text-red-500 text-xs">Apple</span>-->
<!--                  <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs">Remover</a>-->
                </div>
              </div>
              <div class="flex justify-center w-1/5">
                <button @click="decreaseQuantity(id)" class="hover:bg-teal-400 hover:text-white p-1" type="button">
                  <Icon name="typcn:minus-outline" />
                </button>
                <input class="mx-2 border text-center w-8" type="text" :value="quantity">
                <button @click="increaseQuantity(id)" class="hover:bg-teal-400 hover:text-white p-1" type="button">
                  <Icon name="typcn:plus-outline" />
                </button>
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">R${{ price }}</span>
              <span class="text-center w-1/5 font-semibold text-sm">R${{ total }}</span>
            </div>

          </div>
          <div class="bg-neutral-200 p-5 rounded-lg shadow-md">
            <div class="sticky top-20">
              <h2 class="mb-3">Total do pedido</h2>
              <div class="grid grid-cols-2">
                <p>{{ cart.items.length == 1 ? '1 item' : `${cart.items.length} itens` }}</p>
                <p>R${{ cart.total }}</p>
              </div>
              <button :disabled="!cart.items.length || loading" class="btn w-full" type="button">Continuar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
