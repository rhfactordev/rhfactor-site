<script setup>
import ETitle from "~/components/elements/ETitle.vue";
import {useSessionStore} from "~/stores/session";

const loading = ref(false)
const birthmaps = ref([])
const session = useSessionStore()

const parseDate = ( date ) => {
  return `${date[2]}/${date[1]}/${date[0]} ${date[4]}:${date[5]}`
}

definePageMeta({
  middleware: ['auth'],
  layout: 'authenticated'
});

const loadBirthmaps = async () =>{
  if( loading.value ){
    return
  }
  loading.value = true
  const { data } = await useFetch(`/api/birthmaps?token=${session.token}`)
  loading.value = false

  birthmaps.value = data.value.birthmaps
}

onMounted(async ()=>{
  await loadBirthmaps()
})
</script>

<template>
  <e-title>Meus mapas astrais</e-title>
  <div class="card p-5 rounded-md">

    <div v-if="loading"><p>Aguarde! Carregando seus mapas... </p></div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table>
        <thead>
        <tr>
          <th scope="col">
            # N. Pedido
          </th>
          <th scope="col">
            Nome
          </th>
          <th scope="col">
            Data de Nascimento
          </th>
          <th scope="col">
            Status
          </th>
        </tr>
        </thead>
        <tbody>
        <tr  v-for="(item,i) in birthmaps" :key="i" class="bg-white">
          <th scope="row" >{{item.id}}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.birthdate }}</td>
          <td>
            <span v-if="!item.delivered">Aguardando.</span>
            <nuxt-link v-else :to="`/minha-conta/meus-mapas/${item.id}`">Ler</nuxt-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
