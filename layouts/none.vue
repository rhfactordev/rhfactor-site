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
  <nuxt-loading-indicator />
  <slot/>
</template>
