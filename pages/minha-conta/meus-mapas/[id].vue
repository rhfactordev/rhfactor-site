<script setup>

import ETitle from "~/components/elements/ETitle.vue";
import {useSessionStore} from "~/stores/session";
import BirthmapRender from "~/components/BirthmapRender.vue";

const route = useRoute()
const loading = ref(false)
const birthmap = ref({})
const session = useSessionStore()

const birthmapId = computed(()=> route.params.id )

definePageMeta({
  middleware: ['auth'],
  layout: 'authenticated'
});

const loadBirthmap = async () =>{
  if( loading.value ){
    return
  }
  loading.value = true
  const { data } = await useFetch(`/api/birthmap?token=${session.token}&birthmapId=${birthmapId.value}`)
  loading.value = false

  birthmap.value = data.value.birthmap
}

onMounted(async ()=>{
  await loadBirthmap()
})
</script>

<template>
  <e-title>Mapa Natal</e-title>
  <div v-if="loading"><p>Aguarde! Carregando seu mapa astral... </p></div>
  <div v-else class="card">
    <birthmap-render :birthmap="birthmap" />
  </div>

</template>
