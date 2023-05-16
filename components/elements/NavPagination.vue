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
               class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
      Anterior
    </nuxt-link>
    <nuxt-link v-for="i in pages"
               :key="i"
               :to="`${path}/page/${i}`"
               class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        active-class="dark:bg-emerald-950"
        >
      {{i}}
    </nuxt-link>
    <nuxt-link :to="`${path}/page/${next}`"
               v-if="hasNext"
               class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
      Próximo
    </nuxt-link>
  </div>
</template>
