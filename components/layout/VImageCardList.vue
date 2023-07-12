<script setup>
import VTitle from "~/components/layout/VTitle.vue";
import VButton from "~/components/layout/VButton.vue";
import VCardItem from "~/components/layout/VCardItem.vue";

const props = defineProps(['image', 'title', 'cta', 'target', 'items'])
const hasCtaButton  = computed(()=> props.cta && props.cta.length > 1 )

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
  <section>
    <div class="container mx-auto px-10 py-20">
      <v-title :title="title" size="4" />
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div>
          <img class="w-full mb-5" :src="image" :alt="`Imagem para ${title}`" />
        </div>
        <div class="pr-5">
          <div class="grid gap-4 grid-cols-1">
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
        </div>
      </div>
    </div>
  </section>
</template>
