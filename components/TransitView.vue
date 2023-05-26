<script setup>
const props = defineProps(['transit', 'showPlanets'])

const hasPlanets = computed(()=>{
  return props.transit.planets && props.transit.planets.length > 0
})
</script>

<template>
  <h2 class="my-3">{{transit.name}}</h2>
  <div class="mb-5">
    <div v-html="transit.birthmapText"></div>
  </div>
  <div v-if="hasPlanets" v-for="(item,x) in transit.planets" :key="x">
    <h3 class="my-3">{{ item.name }}</h3>
    <div class="mb-5" >
       <div v-html="item.birthmapText"></div>
    </div>
  </div>
</template>
