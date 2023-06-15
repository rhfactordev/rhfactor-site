<script setup>
  import {useSessionStore} from "~/stores/session";
  import {useNuxtApp} from "#app";

  const props = defineProps(["services","color"])

  const site = useNuxtApp().site
  const dropdownState = ref(false)
  const menuState = ref(false)
  const isMenuOpened = computed(()=> menuState.value )
  const session = useSessionStore()

  const openCloseMenu = () => {
    if( menuState.value ){
      dropdownState.value = false
    }
    menuState.value = !menuState.value
  }

  const closeDropdown = () => {
    menuState.value = false
    dropdownState.value = false
  }

  const isAuthenticated = computed(()=> session.isAuthenticated )
  const hasServices = computed(()=>  props.services != null && props.services.length > 0 )
  const services = computed(()=>  props.services != null && props.services )

  const mainMenu = computed(()=>[
    { title : 'Home' , to : '/' },
    { title : 'Sobre mim' , to : '/sobre-mim' },
    { title : 'Blog' , to : '/blog' },
    { title : 'Contato' , to : '/contato' }
  ])

</script>

<template>

  <nav class="z-20 border-gray-200">
    <div class="flex flex-wrap justify-between md:justify-center items-center mx-auto max-w-screen-xl p-4 md:p-0">
      <button  @click="openCloseMenu" type="button" class="inline-flex items-center p-2 ml-1 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div
          :class="{ 'hidden': !isMenuOpened }"
          class="items-center justify-center font-medium w-full md:flex md:w-auto md:order-1"
          >
        <!-- border-teal-700 bg-teal-400-->
        <ul class="flex flex-col md:flex-row p-4 md:p-2 mt-2 md:mt-0 border md:border-0 rounded-md md:bg-transparent md:space-x-4">
          <li v-for="({to, title},i) in mainMenu" :key="i">
            <nuxt-link @click="closeDropdown" :to="to"
                       class="py-2 px-4 font-light rounded"
                       exact-active-class="active">{{title}}</nuxt-link>
          </li>
          <li v-if="!isAuthenticated" class="md:hidden mb-1">
            <nuxt-link @click="closeDropdown" to="/login"
                       class="py-2 px-4 font-light rounded"
                       exact-active-class="active">Acessar minha conta</nuxt-link>
          </li>
          <li v-else class="md:hidden mb-1">
            <nuxt-link @click="closeDropdown" to="/minha-conta"
                       class="py-2 px-4 font-light rounded"
                       exact-active-class="active">Minha conta</nuxt-link>
          </li>
          <li v-if="hasServices" class="md:hidden mb-1">
            <nuxt-link @click="closeDropdown"
                       class="py-2 px-4 font-light rounded"
                       exact-active-class="active" :to="services[0].target">
              {{ services[0].name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">

.link-style {
@apply md:text-teal-900 hover:bg-teal-800 md:hover:bg-transparent md:hover:text-teal-700;
}

.link {
  @apply block link-style;
}

.dropdownLink {
  @apply block p-3 rounded-lg text-teal-900 hover:text-white hover:bg-teal-600
}

</style>

