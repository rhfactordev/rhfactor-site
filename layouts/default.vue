<template>
  <header class="bg-white sticky top-0">
    <div class="bg-teal-400 flex justify-between text-sm text-white font-serif font-medium">
      <div class="hidden md:inline-flex">
        <ul class="flex space-x-5 p-3 mx-4">
          <li class="inline-flex items-center">
            <nuxt-link class="hover:text-emerald-900" to="/cadastro">Cadastro</nuxt-link>
          </li>
          <li class="inline-flex items-center">
            <nuxt-link class="hover:text-emerald-900" to="/login">Login</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="flex-auto">
        <nuxt-link to="/">
          <img class="max-w-md m-auto" src="https://www.andrezaastrologia.com.br/andrezaastrologia-logo-alpha.png" alt="Logo Site">
        </nuxt-link>
      </div>
      <div class="hidden md:inline-flex">
        <ul class="flex space-x-5 p-3 mx-4 bg-teal-600">
          <li class="inline-flex items-center">
            <nuxt-link class="hover:text-emerald-900" to="/loja/mapas/mata-natal">Mapa Astral</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <div>





    </div>
  </header>
  <slot />

  <!-- Footer container -->
  <layout-footer />
</template>
<script setup lang="ts">
import LayoutFooter from "~/components/layout/LayoutFooter.vue";
import LinkButton from "~/components/elements/LinkButton.vue";
</script>
