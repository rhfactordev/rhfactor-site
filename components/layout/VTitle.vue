<script setup>
const props = defineProps(['title', 'subtitle', 'tag', 'size'])
const tagTitle = computed(()=> props.tag || 'h2' )
const size = computed(()=>{
  if( props.tag )
    return `text-${props.tag}xl`
  return 'text-4xl'
})
</script>
<template>
  <component class="font-bold uppercase mb-3"
             :class="size"
             :is="tagTitle">{{ title }}</component>
  <hr class="border-b border-cyan-500 w-20 mb-5"/>
  <p v-if="subtitle" class="font-normal text-sm uppercase text-neutral-600 mb-12">{{ subtitle }}</p>
</template>
