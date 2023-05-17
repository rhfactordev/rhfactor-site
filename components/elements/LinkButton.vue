<script setup>
  defineProps(["to"])
</script>
<template>
  <nuxt-link
      class="focus:outline-none text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg px-4 py-2 mr-2 mb-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
      :to="to">
    <slot />
  </nuxt-link>
</template>
