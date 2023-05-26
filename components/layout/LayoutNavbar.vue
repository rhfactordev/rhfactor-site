<script setup>
  import {useSessionStore} from "~/stores/session";

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

</script>

<template>
  <nav class="bg-teal-100 z-20 border-gray-200">
    <div class="flex flex-wrap justify-between md:justify-center items-center mx-auto max-w-screen-xl p-4 md:p-0">
      <button  @click="openCloseMenu" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div
          :class="{ 'hidden': !isMenuOpened }"
          class="items-center justify-center font-medium w-full md:flex md:w-auto md:order-1"
          >
        <ul class="flex flex-col md:flex-row p-4 md:p-2 mt-2 md:mt-0 border md:border-0 border-teal-700 rounded-md bg-teal-400 md:bg-transparent md:space-x-4">
          <li>
            <nuxt-link @click="closeDropdown" to="/" class="link" exact-active-class="text-teal-900 ">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link @click="closeDropdown" to="/sobre-mim" class="link" exact-active-class="text-teal-900">Sobre mim</nuxt-link>
          </li>
          <li>
            <nuxt-link @click="closeDropdown" to="/blog" class="link" exact-active-class="text-teal-900">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link @click="closeDropdown" to="/contato" class="link" exact-active-class="text-teal-900">Contato</nuxt-link>
          </li>
          <li v-if="!isAuthenticated" class="md:hidden">
            <nuxt-link @click="closeDropdown" to="/login" class="link bg-teal-500" exact-active-class="text-teal-900">Acessar minha conta</nuxt-link>
          </li>
          <li v-else class="md:hidden">
            <nuxt-link @click="closeDropdown" to="/minha-conta" class="link bg-teal-500" exact-active-class="text-teal-900">Minha conta</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">

.link-style {
  @apply py-2 px-4 font-light text-white md:text-teal-900 rounded hover:bg-teal-800 md:hover:bg-transparent md:hover:text-teal-700;
}

.link {
  @apply block link-style;
}

.dropdownLink {
  @apply block p-3 rounded-lg text-teal-900 hover:text-white hover:bg-teal-600
}

</style>
