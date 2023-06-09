<script setup lang="ts">
import ETitle from "~/components/elements/ETitle.vue";
import {useNuxtApp} from "#app";
import { useClipboard, usePermission } from '@vueuse/core'

const app = useNuxtApp()
const site = app.site
const route = useRoute()
const router = useRouter()
const order = ref({})
const loading = ref(false)


const { copy, copied } = useClipboard()
const permissionRead = usePermission('clipboard-read')
const permissionWrite = usePermission('clipboard-write')

const orderId = computed(()=> route.params.id >= 1 ? route.params.id : 1 )
const hasOrder = computed(()=> orderId.value && order.value.id != null )
const hasQrCode = computed(()=> hasOrder.value && order.value.qrcodeBase64 != null )

const getPixInfo = async () =>{
  if( loading.value ){
    return
  }
  loading.value = true
  const { data, error } = await useFetch("/api/order-pix", {
    params:{
      id : orderId.value
    }
  })
  loading.value = false

  if( !error.value ){
    order.value = data.value
  }

}

const verifyPayment = async () =>{
  if( loading.value ){
    return
  }
  loading.value = true
  const { data, error } = await useFetch("/api/order-validate", {
    query : {
      orderId : order.value.orderId,
      paymentId : order.value.id
    },
    watch : false
  })
  loading.value = false

  if( !error.value ){
    if( data.value.success ){
      await router.push(`/checkout/${orderId.value}/obrigado`)
      return
    }
    alert(`Não foi possível verificar seu pagamento. \nStatus: ${data.value.message}`)
  }

}

onMounted(async ()=>{
  setTimeout(async ()=>{
    await getPixInfo()
  }, 1000);
})

watch(copied, async (newVal) => {
  // TODO: Deixar mais sutil
  alert('Chaves copiadas')
})

</script>

<template>
  <main>
    <e-title>Pagamento Pix</e-title>

    <section class="py-10" v-if="loading">
      <div class="m-auto w-full md:w-5/12 py-10 text-center">
        <h2 class="text-teal-800 h4">Carregando...</h2>
      </div>
    </section>

    <section v-if="hasQrCode" class="py-10">
      <div class="m-auto w-full md:w-5/12 p-10">
        <h2 class="text-teal-800 text-center h4">QR Code</h2>
        <img class="m-auto max-w-xs py-10" :src="`data:image/jpeg;base64,${order.qrcodeBase64}`" />

        <p class="text-center">Caso não consiga ver o QRCode,
          <a class="text-teal-400 hover:text-teal-600" :href="order.ticketUrl" target="_blank">clique aqui</a>.
        </p>

        <textarea readonly class="form-control" id="pixQrcode" aria-label="Pix Copia e Cola" v-model="order.qrcode"></textarea>

        <button @click="copy(order.qrcode)" class="bg-teal-400 hover:bg-teal-500 block text-white shadow-lg shadow-gray-300 p-3 rounded-xl w-full mb-10">Copiar</button>

        <h2 class="text-primary text-center h4 mb-5">Já efetuou seu pagamento?</h2>
        <p>Caso você tenha efetuado seu pagamento, clique no botão abaixo para informar seu pagamento!</p>

        <button :disabled="loading" @click="verifyPayment" class="bg-teal-400 hover:bg-teal-500 block text-white shadow-lg shadow-gray-300 p-3 rounded-xl w-full mb-10">Informar pagamento</button>

      </div>
    </section>


    <section class="py-10" v-else v-if="!loading && hasOrder">
      <div class="m-auto w-full md:w-5/12 py-10 text-center">
        <h2 class="text-teal-800 h4">Ops! Houve um erro</h2>
        <p>Houve um erro ao tentar obter os dados de seu pagamento.</p>

        <div class="border py-5">
          <p> Status: {{ order.status }}</p>
          <p> Detalhes: {{ order.detail }}</p>
        </div>

      </div>
    </section>

  </main>
</template>
