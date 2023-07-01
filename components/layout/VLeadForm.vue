<script setup>
import VButton from "~/components/layout/VButton.vue";
import VSubscriptionButton from "~/components/layout/VSubscriptionButton.vue";

const props = defineProps(['pre','title','description', 'actions', 'image', 'cta', 'target', 'order'])
const hasCtaButton = computed(()=> props.cta != null)
const imageOrder = computed(()=> props.order && props.order > 0 ? `order-${props.order}` : 'order-2')

</script>
<template>
  <section class="container mx-auto mb-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-16 items-center">
      <div class="max-w-lg max-h-[500px] mx-auto overflow-hidden" :class="[imageOrder]">
        <img :src="image"
             :alt="`Image for ${title}`"
             class="w-auto">
      </div>
      <div class="px-10">
        <p class="font-bold my-10">{{ pre }}</p>
        <h1 class="font-bold text-3xl md:text-5xl mb-5">{{ title }}</h1>
        <p class="mb-6">
          {{ description }}
        </p>
        <form>
          <input type="email" name="s" />
        </form>
      </div>
    </div>

  </section>
</template>
