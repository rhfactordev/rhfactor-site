<script setup>

const props = defineProps(['pre','title','description', 'image', 'cta', 'buttonStyle'])
const ctaComputed = computed(()=> props.cta || 'Cadastrar-me' )

const submit = async () => {
  console.log('Submit')
}

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
        <form @submit.prevent="submit" class="text-center">
          <input class="w-full border border-neutral-300 rounded-lg py-4 mb-3" type="email" required placeholder="Digite seu e-mail" >
          <input class="border border-neutral-200 shadow-lg w-full bg-neutral-400 hover:bg-neutral-300 py-4 rounded-lg transition-colors" type="submit" :value="ctaComputed">
        </form>
      </div>
    </div>
  </section>
</template>
