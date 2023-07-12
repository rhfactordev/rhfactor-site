<script setup>
  import VTitle from "~/components/layout/VTitle.vue";
  import VButton from "~/components/layout/VButton.vue";

  const props = defineProps(['image', 'title', 'content', 'description', 'cta', 'target'])
  const hasContent = computed(()=> props.content && props.content.length > 10 )
  const hasCtaButton  = computed(()=> props.cta && props.cta.length > 1 )

</script>
<template>
  <section>
    <div class="container mx-auto px-10 py-20">
      <v-title :title="title" size="4" />
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="md:order-2">
          <img class="w-full mb-5" :src="image" :alt="`Imagem para ${title}`" />
        </div>
        <div class="pr-5">
          <div v-if="hasContent" v-html="content"></div>
          <p class="mb-5" v-else>{{description}}</p>
          <v-button v-if="hasCtaButton" class="primary mt-5 mx-auto" :to="target">{{cta}}</v-button>
        </div>
      </div>
    </div>
  </section>
</template>
