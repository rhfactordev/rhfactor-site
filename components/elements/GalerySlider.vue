<script setup>

const items = computed(() => {
  return [
    {
      image: 'https://picsum.photos/id/1/1240/420'
    },
    {
      image: 'https://picsum.photos/id/10/1240/420'
    },
    {
      image: 'https://picsum.photos/id/20/1240/420'
    },
    {
      image: 'https://picsum.photos/id/50/1240/420'
    },
    {
      image: 'https://picsum.photos/id/60/1240/420'
    }
  ]
})


const active = ref(0)

const preview = () =>{
  if( active.value-1 < 0 ){
    active.value = items.value.length-1
    return
  }
  active.value = active.value - 1
}

const next = () =>{
  if( active.value+1 > items.value.length-1 ){
    active.value = 0
    return
  }
  active.value = active.value + 1
}


</script>

<template>
  <div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div class="relative overflow-hidden h-56  md:h-96">
      <div v-for="({image}, i) in items" :key="i" class="duration-700 ease-in-out" data-carousel-item>
        <img :src="image"
             :class="{ 'hidden' : i != active  }"
             class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
      </div>
    </div>
    <button @click="preview" type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button @click="next" type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
  </div>
</template>
