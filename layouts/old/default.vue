<script setup>
import {useNuxtApp} from "#app";
import {useSessionStore} from "~/stores/session";

const site = useNuxtApp().site
const session = useSessionStore()

const isAuthenticated = computed(()=> session.isAuthenticated )
const hasServiceLink =  computed(()=> site && site.servicesLink && site.servicesLink.length > 0 )

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
        <li v-if="!isAuthenticated" class="inline-flex items-center">
          <nuxt-link class="hover:text-emerald-900" to="/login">Login</nuxt-link>
        </li>
        <li v-if="isAuthenticated" class="inline-flex items-center">
          <nuxt-link class="hover:text-emerald-900" to="/minha-conta">Minha conta</nuxt-link>
        </li>
        <li v-if="isAuthenticated" class="inline-flex items-center">
          <nuxt-link class="hover:text-emerald-900" to="/logout">Sair</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="flex-auto">
      <nuxt-link to="/">
        <span class="hidden">{{ site.title }}</span>
        <img class="max-w-full md:max-w-md m-auto" :src="site.image" :alt="`Logo ${site.title}`">
      </nuxt-link>
    </div>
    <div class="hidden md:inline-flex">
      <ul class="flex space-x-5 p-3 mx-4 bg-teal-600">
        <li v-if="hasServiceLink" class="inline-flex items-center">
          <nuxt-link class="hover:text-emerald-900" :to="site.servicesLink[0].target">
            {{ site.servicesLink[0].name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
  <header class="bg-white sticky top-0 z-40">
    <layout-navbar
        :services="site.servicesLink"
    />
  </header>
  <nuxt-loading-indicator />
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
