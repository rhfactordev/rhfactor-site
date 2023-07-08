<script setup>

import VCardItem from "~/components/layout/VCardItem.vue";
import VButton from "~/components/layout/VButton.vue";
import VTitle from "~/components/layout/VTitle.vue";

const props = defineProps(['title', 'subtitle', 'items', 'cta', 'target'])
const hasCtaButton = computed(()=> props.cta != null)

const hasTitle = computed(() => props.title && props.title.length> 2)

const jsonItem = computed(()=> {
  try {
    return JSON.parse(props.items)
  }catch (e){
    console.log('jsonItem', e)
    return []
  }
})

</script>

<template>
  <section class="py-20">
    <div class="container mx-auto px-10">
      <v-title
          v-if="hasTitle"
          :title="title"
          :subtitle="subtitle"
      />
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <v-card-item v-for="({ title, subtitle, description, target, image, cta, pre } ,i) in jsonItem" :key="i"
                     :title="title"
                     :subtitle="subtitle"
                     :description="description"
                     :target="target"
                     :image="image"
                     :cta="cta"
                     :pre="pre"
        />
      </div>

      <div class="mt-10 text-center" v-if="hasCtaButton">
        <v-button class="primary"  :to="target">{{cta}}</v-button>
      </div>

    </div>
  </section>
</template>
