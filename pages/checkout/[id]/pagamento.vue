<script setup>

import {useNuxtApp} from "#app";
import MercadoPagoForm from "~/components/checkout/MercadoPagoForm.vue";
import PaymentOptions from "~/components/checkout/PaymentOptions.vue";
import LoadinIcon from "~/components/LoadinIcon.vue";

const app = useNuxtApp()
const site = app.site
const route = useRoute()

const order = ref({})
const selectedPayment = ref({})
const loading = ref(false)
const paymentOptions = ref([])

const orderId = computed(()=> route.params.id >= 1 ? route.params.id : 1 )
const hasOrder = computed(()=> order.value != null && order.value.id != null && order.value.id > 0 )
const hasPayments = computed(()=> paymentOptions.value != null && paymentOptions.value.length > 0 )
const isMP = computed(()=> hasPayments.value && selectedPayment.value.gateway == 'mp' )

const selectPaymentMethod = async ( payment ) =>{
  selectedPayment.value = payment
}

const loadOrder = async () =>{
  console.log('loadOrder')
  if( loading.value ){
    return
  }
  loading.value = true
  const { data, error } = await useFetch("/api/order", {
    query : {
      id : orderId.value
    },
    watch : false
  })
  loading.value = false
  if( !error.value ){
    order.value = data.value
    return
  }
  console.error('Erro carregar compras','loadOrder', error.value)
}

const loadPayments = async () =>{
  console.log('loadPayments')
  if( loading.value ){
    return
  }

  loading.value = true
  const { data, error } = await useFetch("/api/payments")
  loading.value = false

  if( !error.value ){
    paymentOptions.value = data.value
    return
  }
  console.error('Erro carregar pagamentos','loadPayments', error.value)
}

onMounted(async ()=>{
  setTimeout(async ()=>{
    await loadOrder()
    await loadPayments()
  }, 1000);
})

useHead({
      script: [
        {
          src: "https://sdk.mercadopago.com/js/v2",
          async: false,
        },
      ],
    }
)

definePageMeta({
  layout: 'checkout'
})
</script>

<template>
  <main class="bg-neutral-100 py-10">

<!--    <button type="button" @click="loadOrder">LoadOrder</button>-->
<!--    <br/>-->
<!--    <button type="button" @click="loadPayments">loadPayments</button>-->
<!--    <br/>-->
<!--    <pre>-->
<!--      loading {{loading}}-->
<!--      hasOrder {{hasOrder}}-->
<!--      order {{order}}-->
<!--      payments {{paymentOptions}}-->
<!--    </pre>-->

    <div class="w-10/12 md:w-7/12 mx-auto mb-10">
      <checkout-checkpoint-steps />
    </div>

    <section v-if="hasOrder" class="shadow-lg flex flex-wrap md:flex-nowrap rounded-lg w-10/12 mx-auto">
      <div class="flex-grow md:flex-none bg-neutral-200 p-10 rounded-t-lg md:rounded-l-lg md:rounded-tr-none ">
        <h2 class="mb-8">Resumo do pedido</h2>

        <p class="mb-3 flex justify-between">Itens <span>{{order.items.length}}</span></p>
        <p class="mb-3 flex justify-between">Total sem frete: <span>R$ {{order.subtotal}}</span></p>
        <hr class="mb-3 border-b-0 border-neutral-500" />
        <p class="mb-10 font-bold flex justify-between">Total: <span>R$ {{order.total}}</span></p>

        <p>Forma de pagamento:</p>
        <LazyCheckoutPaymentOptions
            v-if="hasPayments"
            :payment-options="paymentOptions"
            @onSelectPaymentMethod="selectPaymentMethod"
        />
        <loadin-icon v-else />

      </div>
      <div class="flex-grow bg-white rounded-b-lg md:rounded-r-lg md:rounded-bl-none p-10">
        <div class="max-w-2xl m-auto">
          <LazyCheckoutMercadoPagoForm v-if="isMP"
                                       :method="selectedPayment"
                                       :order="order"
          />
          <div v-else>
            <p>Não foram encontrados meios de pagamento</p>
          </div>
        </div>
      </div>
    </section>

    <div class="text-center" v-else>
      <loadin-icon class="mb-10" />
      <p>Sua compra está demorando, clique aqui?</p>
      <button :disabled="loading" @click="loadOrder" type="button" class="btn">Recarregar</button>
    </div>


  </main>
</template>
