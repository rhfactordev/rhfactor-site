<script setup>
const props = defineProps(['to'])
const to = computed(()=> props.to || '')
const isLink = computed(()=> props.to != null && props.to.length > 0 )
</script>
<template>
  <nuxt-link v-if="isLink" class="btn" :to="to">
    <slot />
  </nuxt-link>
  <button class="btn" v-else>
    <slot />
  </button>
</template>

<style scoped type="postcss">

  .cyan {
    @apply bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 text-white
  }

  .btn {
    @apply px-4 py-2 border mb-3 mr-2 transition-colors focus:ring-4 focus:outline-none font-medium rounded-lg text-sm md:mr-0  px-4 py-2 text-center mr-3;
  }

  .primary{
    @apply bg-cyan-500 text-cyan-900;
  &:hover{
     @apply bg-cyan-400;
   }
  }

  .primary-outline{
    @apply border-cyan-500 text-cyan-900;
    &:hover{
       @apply bg-cyan-400;
     }
  }
</style>
