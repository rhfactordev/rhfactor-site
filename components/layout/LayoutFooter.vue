<script setup>
const props = defineProps(["title", "document", "services", "links", "description", "phone", "email", "social", "logo"])
const hasLinks = computed(()=>  props.links.length > 0 )
</script>

<template>
  <footer class="bg-teal-600 text-center text-white lg:text-left">

    <div class="bg-teal-400 flex items-center justify-center border-b-2 border-teal-700 p-6 lg:justify-between">
      <div class="mr-12 hidden lg:block">
        <span>Conecte-se comigo através das redes sociais:</span>
      </div>
      <layout-social :social="social" />
    </div>


    <div class="px-6 py-10 text-center md:text-left text-sm">
      <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img class="w-96 m-auto" :src="logo" :alt="`Logo ${title}`">
          <p class="mx-4 hidden md:block">
            {{description}}
          </p>
          <p class="mx-4">
            CNPJ {{ document }}
          </p>
        </div>


        <div class="hidden md:block" :class="{ 'col-span-2' : !hasLinks }"  >
          <h2 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Serviços Digitais
          </h2>
          <p v-for="({target,name},index) in services" :key="index" class="mb-4">
            <nuxt-link class="hover:text-teal-800 text-neutral-50" :to="target">{{ name }}</nuxt-link>
          </p>
        </div>

        <div v-if="hasLinks" class="hidden md:block">
          <h2 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Links Rápidos
          </h2>
          <p v-for="({target,name},index) in links" :key="index" class="mb-4">
            <nuxt-link class="hover:text-teal-800 text-neutral-50" :to="target">{{ name }}</nuxt-link>
          </p>
        </div>

        <div>
          <h2 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Contato
          </h2>
          <p class="mb-4 flex items-center justify-center md:justify-start">
            {{phone}}
          </p>
          <p class="mb-4 flex items-center justify-center md:justify-start">
            {{email}}
          </p>
          <p class="flex items-center justify-center md:justify-start mb-4">
            <nuxt-link to="/termos-de-uso">Termos de uso</nuxt-link>
          </p>
          <p class="mb-4 flex items-center justify-center md:justify-start">
            <nuxt-link to="/privacidade">Política de privacidade</nuxt-link>
          </p>
        </div>
      </div>
    </div>

    <div class="p-3 text-center">
      <p class="text-xs">Desenvolvido por <a class="font-semibold text-neutral-600 dark:text-neutral-400" href="https://www.rhfactor.com.br/">RHFactor</a></p>
    </div>

  </footer>
</template>
