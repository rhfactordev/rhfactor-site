<script setup>
import {useNuxtApp} from "#app";
import {useSessionStore} from "~/stores/session";

const site = useNuxtApp().site
const session = useSessionStore()

const isAuthenticated = computed(()=> session.isAuthenticated )
const hasServiceLink =  computed(()=> site && site.servicesLink && site.servicesLink.length > 0 )

const headers = {
  titleTemplate: `%s - ${site.title}`,
  htmlAttrs : {
    lang : 'pt-BR',
  },
  bodyAttrs : {
    class: site.layout
  }
}

useServerHead(headers)
useHead(headers)

</script>
<template>

  <header>
    <div class="flex flex-wrap justify-between">
      <div class="w-full px-10 md:w-5/12">
        <nuxt-link to="/"><img class="w-full md:max-w-md m-auto" :src="site.image" :alt="`Logo ${site.title}`"></nuxt-link>
      </div>
      <div class="flex-grow">
        <layout-navbar
            :color="site.layout"
            class="my-0 md:my-5"
            :services="site.servicesLink" />
      </div>
    </div>
  </header>


  <nuxt-loading-indicator />
  <slot/>
  <!--
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
  -->
</template>
