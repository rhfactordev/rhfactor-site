<template>
  <NuxtLayout :name="layout">
    <nuxt-page/>
  </NuxtLayout>
</template>

<script setup>
import {useNuxtApp} from "#app";
const {layout} = useNuxtApp().site
</script>
