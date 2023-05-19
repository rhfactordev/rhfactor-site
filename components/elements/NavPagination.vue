<script setup>
  const props = defineProps(["pages","path","current"])

  const hasPrevious = computed(()=> parseInt(props.pages) > 1 && parseInt(props.current) > 1 )
  const hasNext = computed(()=> parseInt(props.pages) > 1 && parseInt(props.current) < parseInt(props.pages) )
  const next = computed(()=> parseInt(props.current) > parseInt(props.pages) ?  parseInt(props.pages) : parseInt(props.current) + 1)
  const previous = computed(()=> parseInt(props.current) < 1 ? 1 : parseInt(props.current) -1  )
</script>

<template>
  <div class="inline-flex rounded-md shadow-sm">
    <nuxt-link :to="`${path}/page/${previous}`"
               v-if="hasPrevious"
               aria-current="page"
               class="btn-pag rounded-l-lg">
      Anterior
    </nuxt-link>
    <nuxt-link v-for="i in pages"
               :key="i"
               :to="`${path}/page/${i}`"
               class="btn-pag"
               :class="{ 'rounded-l-lg' : !hasPrevious && i == 1 }"
        active-class="active"
        >
      {{i}}
    </nuxt-link>
    <nuxt-link :to="`${path}/page/${next}`"
               v-if="hasNext"
               class="btn-pag rounded-r-lg">
      Próximo
    </nuxt-link>
  </div>
</template>
<style scoped type="postcss">
.btn-pag{
  @apply bg-teal-100 hover:bg-teal-600 text-teal-700 hover:text-white px-4 py-2 text-sm font-medium outline-0;
  &.active{
    @apply bg-teal-200;
    &:hover{
       @apply bg-teal-600;
     }
  }
}
</style>
