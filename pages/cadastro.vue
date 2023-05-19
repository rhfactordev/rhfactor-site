<script setup>
import {useNuxtApp} from "#app";

const site = useNuxtApp().site
const meta = {
  title: `Criar sua conta - ${site.title}`,
  ogTitle: `Criar sua conta - ${site.title}`,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.image
}

useSeoMeta(meta)
useServerSeoMeta(meta)

const account = ref({
  login : '',
  password: ''
})

const showPassword = ref(false)
const inputType = computed(()=> showPassword.value ? 'text' : 'password' )
const showPasswordIcon = computed(()=> showPassword.value ? 'mdi:eye-off' : 'mdi:eye' )
</script>
<template>
  <main class="p-10 my-10">

    <div class="border w-full md:w-5/12 lg:w-4/12 mx-auto bg-teal-100 rounded-lg px-5 py-10">
      <h1 class="text-teal-700 text-center mb-10">Criar seu cadastro</h1>

      <form>
        <div class="mb-3">
          <label class="hidden" for="contactFieldName">Nome</label>
          <input v-model="account.login" required type="text" aria-required="true" name="name" id="contactFieldName" class="form-control" placeholder="Digite seu e-mail.">
        </div>
        <div class="flex mb-3">
          <input v-model="account.password" :type="inputType" class="form-control"  placeholder="Digite sua senha.">
          <button type="button" @click="showPassword=!showPassword" class="btn w-10 h-10">
            <Icon :name="showPasswordIcon" class="w-full h-full m-0" />
          </button>
        </div>
        <button class="btn w-full" type="submit">Criar minha conta</button>
      </form>
      <div class="my-4 text-center">
        <nuxt-link class="text-sm hover:text-teal-600" to="/login">Já tem uma conta? Acesse por aqui!</nuxt-link>
      </div>
    </div>

  </main>
</template>
