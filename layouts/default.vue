<script setup>
import {useNuxtApp} from "#app";

const site = useNuxtApp().site

useServerHead({
  titleTemplate: `%s - ${site.title}`,
  htmlAttrs : {
    lang : 'pt-BR'
  }
})
</script>
<template>
  <div class="bg-teal-400 flex justify-between text-sm text-white font-serif font-medium">
    <div class="hidden md:inline-flex">
      <ul class="flex space-x-5 p-3 mx-4">
        <!--
        <li class="inline-flex items-center">
          <nuxt-link class="hover:text-emerald-900" to="/cadastro">Cadastro</nuxt-link>
        </li>
        -->
        <li class="inline-flex items-center">
          <nuxt-link class="hover:text-emerald-900" to="/login">Login</nuxt-link>
        </li>
        <!--
        <li class="inline-flex items-center">
          <nuxt-link class="hover:text-emerald-900" to="/carrinho">Carrinho</nuxt-link>
        </li>
        -->
      </ul>
    </div>
    <div class="flex-auto">
      <nuxt-link to="/">
        <img class="max-w-md m-auto" :src="site.image" :alt="`Logo ${site.title}`">
      </nuxt-link>
    </div>
    <div class="hidden md:inline-flex">
      <ul class="flex space-x-5 p-3 mx-4 bg-teal-600">
        <li class="inline-flex items-center">
          <nuxt-link class="hover:text-emerald-900" :to="site.servicesLink[0].target">
            {{ site.servicesLink[0].name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
  <header class="bg-white sticky top-0 z-40">
    <layout-navbar/>
  </header>
  <slot/>
  <layout-footer :title="site.title"
                 :logo="site.image"
                 :document="site.document"
                 :description="site.description"
                 :phone="site.phone"
                 :email="site.email"
                 :social="site.social"
                 :services="site.servicesLink"
                 :links="site.links"
  />
</template>
