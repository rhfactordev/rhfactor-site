<script setup>
  const props = defineProps(['image', 'title', 'subtitle'])
  const oClass = computed(()=>{
    if( props.image == null ) return ''
    return `bg-[url('${props.image}')]`
  })
</script>
<template>
  <section class="bg-cover bg-no-repeat bg-gray-700 bg-blend-multiply " :class="[oClass]" >
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 class="mb-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        {{title}}
      </h1>
      <p class=" font-normal text-gray-300 px-10 sm:px-16 lg:px-48">
        {{subtitle}}
      </p>
    </div>
  </section>
</template>
