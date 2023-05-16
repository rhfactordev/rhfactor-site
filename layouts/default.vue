<template>
  <header>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/sobre">Sobre</nuxt-link>
    <nuxt-link to="/blog">Blog</nuxt-link>
    <nuxt-link to="/contato">Contato</nuxt-link>
  </header>
  <slot />

  <!-- Footer container -->
  <layout-footer />
</template>
<script setup lang="ts">
import LayoutFooter from "~/components/layout/LayoutFooter.vue";
</script>
