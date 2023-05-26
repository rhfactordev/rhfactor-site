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

  <div class="flex flex-wrap">
    <div class="flex-none">
      <ul>
        <li><nuxt-link to="/minha-conta/meus-mapas">Meus mapas</nuxt-link></li>
        <li><nuxt-link to="/minha-conta/minhas-compras">Minhas compras</nuxt-link></li>
      </ul>
    </div>
    <div class="flex-grow p-5 bg-neutral-100">
      <slot/>
    </div>
  </div>

</template>
