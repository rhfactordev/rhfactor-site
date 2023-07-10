<script setup>
import VButton from "~/components/layout/VButton.vue";

const props = defineProps(["logo","title","menu","cta", "target"])

const menuState = ref(false)
const dropdownState = ref(false)

const isMenuOpened = computed(()=> menuState.value )
const hasCta = computed(()=> props.cta && props.target )
const targetWindow = computed(()=> props.target.startsWith('http') ? '_blank' : '_self' )

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
</script>
<template>
  <nav class="bg-white w-full z-20 top-0 sticky left-0 border-b border-gray-200 shadow-lg">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <nuxt-link to="/" class="flex-shrink">
        <img class="w-full max-w-sm" :src="logo" :alt="`Logo de ${title}`">
      </nuxt-link>
      <div class="flex md:order-2">
        <nuxt-link v-if="hasCta" :to="target" :target="targetWindow">
          <v-button class="cyan hidden md:block">{{cta}}</v-button>
        </nuxt-link>
        <button @click="openCloseMenu"  data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div :class="{ 'hidden': !isMenuOpened }"
           class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li v-for="({target, title}, i ) in menu" :key="i">
            <nuxt-link active-class="active" :to="target" @click="closeDropdown"
                       class="link"
                       aria-current="page">{{title}}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped type="postcss">
  .link{
    @apply block p-2 hover:bg-cyan-500 rounded;
  }
  .active{
    @apply bg-cyan-400;
  }
</style>
