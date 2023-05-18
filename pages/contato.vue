<script setup>
import ETitle from "~/components/elements/ETitle.vue";
import {useNuxtApp} from "#app";

const site = useNuxtApp().site

const metas = {
  title: `Contato - ${site.title}`,
  ogTitle: `Contato - ${site.title}`,
  description: `Entre em contato conosco pelo e-mail ${site.email} ou pelo whatsapp ${site.phone}`,
  ogDescription: `Entre em contato conosco pelo e-mail ${site.email} ou pelo whatsapp ${site.phone}`,
  ogImage: site.image
}

useSeoMeta(metas)
useServerSeoMeta(metas)

const handleSubmit = ( event ) => {
  console.log(event)
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
        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="mb-3">
            <label class="hidden" for="contactFieldName">Nome</label>
            <input type="text" aria-required="true" name="name" id="contactFieldName" class="form-control" placeholder="Nome">
          </div>
          <div class="mb-3">
            <label class="hidden" for="contactFieldEmail">E-mail</label>
            <input type="email" aria-required="true" name="email" id="contactFieldEmail" class="form-control" placeholder="E-mail">
          </div>
          <div class="mb-3">
            <label class="hidden" for="contactFieldWhatsapp">Whatsapp</label>
            <input type="text" name="whatsapp" id="contactFieldWhatsapp" class="form-control" placeholder="Whatsapp">
          </div>
          <div class="mb-3 col-span-full">
            <label class="hidden" for="contactFieldMessage">Mensagem</label>
            <textarea name="whatsapp" rows="5" id="contactFieldWhatsapp" class="form-control" placeholder="Mensagem"></textarea>
          </div>
          <button class="btn" type="submit">Enviar mensagem</button>
        </form>
      </div>
    </div>
  </section>

</template>
