<script setup>
  import VButton from "~/components/layout/VButton.vue";

  defineProps(['cta'])
</script>

<template>
  <div class="w-full border-2 border-cyan-500 p-2 rounded-full bg-cyan-400">
    <div class="flex flex-grow">
      <input class="rounded-full" type="email" name="vSubscriptionButtonEmail" id="vSubscriptionButtonEmail" />
      <button class="rounded-full btn border-cyan-800 bg-cyan-600" type="submit">{{cta}}</button>
    </div>
  </div>
</template>

<style scoped>
.btn{
  @apply
    px-4 py-2
    mb-3
    border-2 transition-colors
    focus:ring-4 focus:outline-none
    font-medium rounded-full text-sm
    text-center;
}

</style>
