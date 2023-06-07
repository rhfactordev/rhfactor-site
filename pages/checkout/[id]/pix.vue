<script setup lang="ts">
import ETitle from "~/components/elements/ETitle.vue";
import {useNuxtApp} from "#app";

const app = useNuxtApp()
const site = app.site
const route = useRoute()

const orderId = computed(()=> route.params.id >= 1 ? route.params.id : 1 )

// Validar se o pagamento já foi feito
const validatePayment = async () =>{
  const { data, error } = await useFetch("/api/order-validate?order=", {
    query : {
      id : orderId.value
    },
    watch : false
  })
}

onBeforeMount(()=>{
  validatePayment()
})

</script>

<template>
  <main>
    <e-title>Pagamento Pix</e-title>
    <section>
      Suas informações de pagamento foram feradas para o pedido
    </section>
  </main>
</template>
