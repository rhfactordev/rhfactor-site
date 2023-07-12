<script setup>
import VButton from "~/components/layout/VButton.vue";

const props = defineProps(['pre','title','description', 'actions', 'image', 'cta', 'target'])
const hasCtaButton = computed(()=> props.cta != null)

const actionsComputed = computed(() => {
  if( hasCtaButton.value ){
    return [ { target : props.target , title  : props.cta , style : props.style  } ]
  }
  return props.actions
})

</script>
<template>
  <section class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-16 items-center">
      <div class="order-2 max-w-lg max-h-[500px] mx-auto overflow-hidden">
        <img :src="image"
             :alt="`Image for ${title}`"
             class="wx-auto">
      </div>
      <div class="px-10">
        <p class="font-bold my-10">{{ pre }}</p>
        <h1 class="font-bold text-3xl md:text-5xl mb-5">{{ title }}</h1>
        <p class="mb-6">
          {{ description }}
        </p>
        <v-button v-for="({ target , title, style }, i) in actionsComputed"
                  :class="style"
                  :key="i"
                  :to="target">{{ title }}</v-button>
      </div>
    </div>

  </section>
</template>
