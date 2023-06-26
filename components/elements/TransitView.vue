<script setup>
const props = defineProps(['transit', 'showPlanets'])

const hasPlanets = computed(()=>{
  return props.transit.planets && props.transit.planets.length > 0
})
</script>

<template>
  <h3 class="my-3 text-teal-500">{{transit.name}}</h3>
  <div class="mb-5">
    <div v-html="transit.birthmapText"></div>
  </div>
  <div v-if="hasPlanets" v-for="(item,x) in transit.planets" :key="x">
    <h4 class="my-3  text-teal-400">{{ item.name }}</h4>
    <div class="mb-5" >
       <div v-html="item.birthmapText"></div>
    </div>
  </div>
</template>
