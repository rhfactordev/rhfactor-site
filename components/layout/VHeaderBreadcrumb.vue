<script setup>

const props = defineProps(['title', 'subtitle', 'items'])

const titleComputed = computed(()=>  props.title || 'Titulo' )
const subtitleComputed = computed(() => props.subtitle || '')
const linksComputed = computed(()=> {
  if( props.items ){
    return JSON.parse(props.items)
  }
  return []
})
const hasSubtitle = computed(()=> subtitleComputed.value.length > 2 )

</script>

<template>
  <div>
    <div class="container px-10 mx-auto flex flex-wrap justify-between align-middle py-7 h-40">
      <ul class="pt-12 flex text-sm order-2">
        <li v-for="({to, label},i) in linksComputed" :key="i" class="mr-3"><nuxt-link :to="to">{{label}}</nuxt-link></li>
      </ul>
      <div>
        <h2 class="text-4xl pt-5 mb-3">{{titleComputed}}</h2>
        <p v-if="hasSubtitle" class="text-xs">{{subtitleComputed}}</p>
      </div>
    </div>
  </div>
</template>
