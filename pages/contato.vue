<script setup>
import ETitle from "~/components/elements/ETitle.vue";
import {useNuxtApp} from "#app";
import Alert from "~/components/elements/Alert.vue";

const site = useNuxtApp().site

const metas = {
  title: `Contato`,
  ogTitle: `Contato`,
  description: `Entre em contato conosco pelo e-mail ${site.email} ou pelo whatsapp ${site.phone}`,
  ogDescription: `Entre em contato conosco pelo e-mail ${site.email} ou pelo whatsapp ${site.phone}`,
  ogImage: site.image
}

useSeoMeta(metas)
useServerSeoMeta(metas)

const showMessage = ref(false)
const contactFormStatus = ref({})
const contactFormPending = ref(false)
const contactForm = ref({
  name : '',
  email: '',
  whatsapp : '',
  message : ''
})

const handleSubmit = async ( event ) => {
  if( contactFormPending.value ){
    return
  }

  showMessage.value = false
  contactFormPending.value = true
  const { data, pending , error, refresh } = await useFetch('/api/contact', {
    method: 'POST',
    body: contactForm,
    // onResponseError({ response }) {
    //   console.log('Deu erro' )
    // },
    watch: false
  })
  contactFormPending.value=false

  if( !error.value ){
    contactFormStatus.value = {
      message : 'Mensagem enviada',
      type : 'success'
    }
    showMessage.value = true
    return
  }

  contactFormStatus.value = {
    message: error.value.data.message,
    type: 'error'
  }
  showMessage.value = true
}
</script>
<template>
  <e-title>Contato</e-title>
  <section class="md:w-8/12 mx-auto mb-6">
    <div class="flex flex-wrap">
      <div class="w-full md:order-2 mb-5 p-5 md:w-5/12 border border-gray-200">
        <div class="p-5">
          <h4>Telefone</h4>
          <p>{{ site.phone }}</p>
        </div>
        <hr/>
        <div class="p-5">
          <h4>Whatsapp</h4>
          <p><a target="_blank" :href="`https://wa.me/${site.whatsapp.replace(/\D/g,'')}`">{{ site.whatsapp }}</a></p>
        </div>
        <div class="p-5">
          <h4>E-mail</h4>
          <p><a :href="`mailto:{{ site.email }}`">{{ site.email }}</a></p>
        </div>
      </div>
      <div class="w-full mb-5 md:w-7/12 p-5">
        <h2 class="mb-6">Formulário de contato</h2>
        <alert v-if="showMessage" :type="contactFormStatus.type">
          <p>{{ contactFormStatus.message }}</p>
        </alert>
        <form @submit.prevent="handleSubmit" method="post" class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="mb-3">
            <label class="hidden" for="contactFieldName">Nome</label>
            <input v-model="contactForm.name" required type="text" aria-required="true" name="name" id="contactFieldName" class="form-control" placeholder="Nome">
          </div>
          <div class="mb-3">
            <label class="hidden" for="contactFieldEmail">E-mail</label>
            <input v-model="contactForm.email" required type="email" aria-required="true" name="email" id="contactFieldEmail" class="form-control" placeholder="E-mail">
          </div>
          <div class="mb-3">
            <label class="hidden" for="contactFieldWhatsapp">Whatsapp</label>
            <input v-model="contactForm.whatsapp" type="text" name="whatsapp" id="contactFieldWhatsapp" class="form-control" placeholder="Whatsapp">
          </div>
          <div class="mb-3 col-span-full">
            <label class="hidden" for="contactFieldMessage">Mensagem</label>
            <textarea v-model="contactForm.message" name="message" rows="5" id="contactFieldMessage" class="form-control" placeholder="Mensagem"></textarea>
          </div>
          <button :disabled="contactFormPending" class="btn" type="submit">Enviar mensagem</button>
        </form>
      </div>
    </div>
  </section>

</template>
