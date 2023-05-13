<template>
  <header>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/sobre">Sobre</nuxt-link>
    <nuxt-link to="/blog">Blog</nuxt-link>
    <nuxt-link to="/contato">Contato</nuxt-link>
  </header>
  <slot />
  <footer>
    <nuxt-link to="/termos-de-uso">Termos de uso</nuxt-link>
    <nuxt-link to="/privacidade">Política de privacidade</nuxt-link>
  </footer>
</template>
