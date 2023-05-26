<script setup>
import ETitle from "~/components/elements/ETitle.vue";
import {useSessionStore} from "~/stores/session";

const loading = ref(false)
const orders = ref([])
const session = useSessionStore()

const parseDate = ( date ) => {
  return `${date[2]}/${date[1]}/${date[0]} ${date[4]}:${date[5]}`
}

definePageMeta({
  middleware: ['auth'],
  layout: 'authenticated'
});

const loadOrders = async () =>{
  if( loading.value ){
    return
  }
  loading.value = true
  const { data } = await useFetch(`/api/orders?token=${session.token}`)
  orders.value = data.value.orders
  loading.value = false
}

onMounted(async ()=>{
  await loadOrders()
})
</script>

<template>
  <e-title>Minhas compras</e-title>
  <div class="card md:p-5 rounded-md">

    <div v-if="loading"><p>Aguarde! Carregando suas compras... </p></div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table>
        <thead>
          <tr>
            <th scope="col">
              # N. Pedido
            </th>
            <th scope="col">
              Data
            </th>
            <th scope="col">
              Total
            </th>
            <th scope="col">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(order,i) in orders" :key="i" class="bg-white">
            <th scope="row" >{{order.id}}</th>
            <td>{{ parseDate(order.dateCreated) }}</td>
            <td>{{ order.total }}</td>
            <td>
              <div v-if="order.status != 'O'">
                {{ order.statusDescription }}
              </div>
              <nuxt-link v-else target="_blank" :to="`/checkout/${order.id}/pagamento`">Efetuar pagamento</nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>



  </div>
</template>
