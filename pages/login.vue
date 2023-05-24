<script setup type="ts">
import {useNuxtApp} from "#app";
import {useSessionStore} from "~/stores/session";


const session = useSessionStore()
const router = useRouter()

const site = useNuxtApp().site
const meta = {
  title: `Login`,
  ogTitle: `Login`,
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

const loading = ref(false)
const showPassword = ref(false)
const inputType = computed(()=> showPassword.value ? 'text' : 'password' )
const showPasswordIcon = computed(()=> showPassword.value ? 'mdi:eye-off' : 'mdi:eye' )

const login = async ()=>{
  if( loading.value ){
    return
  }

  loading.value = true
  const { data , error } = await useFetch('/api/login', {
    method: 'POST',
    watch: false,
    body : account
  })
  loading.value = false

  if( error.value != null ){
    alert(error.value.data.message)
    return
  }
  session.login(data.value.body)
  router.push('/minha-conta')
}

const sessionUser = computed(()=>{
  return session.user
})

</script>
<template>
  <main class="p-10 my-10">

    <div class="border w-full md:w-5/12 lg:w-4/12 mx-auto bg-teal-100 rounded-lg px-5 py-10">
      <h1 class="text-teal-700 text-center mb-10">Login</h1>

      <form @submit.prevent="login" >
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
        <div class="mb-4">
          <nuxt-link class="text-sm hover:text-teal-600" to="/esqueci-minha-senha">Esqueceu sua senha? Clique aqui!</nuxt-link>
        </div>
        <button :disabled="loading" class="btn w-full" type="submit">Login</button>
      </form>
      <!--
      <div class="my-4 text-center">
        <nuxt-link class="text-sm hover:text-teal-600" to="/cadastro">Não tem uma conta? Clique aqui!</nuxt-link>
      </div>
      -->
    </div>

  </main>
</template>
