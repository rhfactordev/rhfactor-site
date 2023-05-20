<script setup>
import {useNuxtApp} from "#app";

const site = useNuxtApp().site
const meta = {
  title: `Recuperar senha`,
  ogTitle: `Recuperar senha`,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image
}

useSeoMeta(meta)
useServerSeoMeta(meta)

const account = ref({
  login : '',
})

</script>
<template>
  <main class="p-10 my-10">

    <div class="border w-full md:w-5/12 lg:w-4/12 mx-auto bg-teal-100 rounded-lg px-5 py-10">
      <h1 class="text-teal-700 text-center mb-10">Recuperar senha</h1>
      <form>
        <div class="mb-3">
          <label class="hidden" for="contactFieldName">Nome</label>
          <input v-model="account.login" required type="text" aria-required="true" name="name" id="contactFieldName" class="form-control" placeholder="Digite seu e-mail.">
        </div>
        <button class="btn w-full" type="submit">Recuperar minha senha</button>
      </form>
      <div class="my-4 text-center">
        <nuxt-link class="text-sm hover:text-teal-600" to="/login">Voltar à tela de Login</nuxt-link>
      </div>
    </div>

  </main>
</template>
