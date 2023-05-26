<script setup>
import {useNuxtApp} from "#app";
import {useSessionStore} from "~/stores/session";

const site = useNuxtApp().site
const session = useSessionStore()

const isAuthenticated = computed(()=> session.isAuthenticated )

useServerHead({
  titleTemplate: `%s - ${site.title}`,
  htmlAttrs : {
    lang : 'pt-BR'
  }
})

</script>

<template>

  <header class="flex flex-wrap justify-between bg-teal-300 p-5">
    <div class="w-full md:w-3/12 lg:w-4/12 xl:w-3/12">
      <nuxt-link to="/">
        <img class="w-full" :src="site.image" :alt="`Logo para ${site.title}`" />
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/">Voltar ao site</nuxt-link>
      <nuxt-link to="/logout">Sair</nuxt-link>
    </div>
  </header>

  <div class="p-5 border-b shadow-lg">
    <ul class="flex flex-wrap">
      <li><nuxt-link class="link" to="/minha-conta/meus-mapas">Meus mapas</nuxt-link></li>
      <li><nuxt-link class="link" to="/minha-conta/minhas-compras">Minhas compras</nuxt-link></li>
    </ul>
  </div>

  <slot/>

</template>

<style scoped lang="postcss">
  .link{
    @apply mr-5;
    &:hover{
       @apply text-teal-400;
     }
  }
</style>
