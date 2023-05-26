<script setup>
const props = defineProps(['birthmap'])

const personalListTitle = computed(()=>{
  if(!props.birthmap.sun ||
      !props.birthmap.house1 ||
      !props.birthmap.moon ){
    return []
  }
  return [
    {...props.birthmap.sun, image: 'https://s3.amazonaws.com/andrezaastrologia.com.br/images/solar.png'},
    {...props.birthmap.house1, image: 'https://s3.amazonaws.com/andrezaastrologia.com.br/images/ascendente.png'},
    {...props.birthmap.moon, image: 'https://s3.amazonaws.com/andrezaastrologia.com.br/images/lua.png'},
  ]
})

const personalList = computed(()=> {
  if(!props.birthmap.sun ||
      !props.birthmap.house1 ||
      !props.birthmap.moon ||
      !props.birthmap.nnode){
    return []
  }
  return [
    props.birthmap.sun,
    props.birthmap.house1,
    props.birthmap.moon,
    props.birthmap.nnode
  ]
})

const relationsList = computed(()=> {
  if(!props.birthmap.house7 ||
      !props.birthmap.venus ||
      !props.birthmap.house4 ||
      !props.birthmap.house5 ||
      !props.birthmap.lilith ||
      !props.birthmap.house11
  ){
    return []
  }
  return [
    props.birthmap.house7,
    props.birthmap.venus,
    props.birthmap.house4,
    props.birthmap.house5,
    props.birthmap.lilith,
    props.birthmap.house11
  ]
})

const workList = computed(()=> {
  if(!props.birthmap.house6 ||
      !props.birthmap.house10 ||
      !props.birthmap.house2
  ){
    return []
  }
  return [
    props.birthmap.house6,
    props.birthmap.house10,
    props.birthmap.house2
  ]
})

const spiritualList = computed(()=> {
  if(!props.birthmap.house12 ||
      !props.birthmap.house9 ||
      !props.birthmap.jupiter
  ){
    return []
  }
  return [
    props.birthmap.house12,
    props.birthmap.house9,
    props.birthmap.jupiter
  ]
})

const lists = computed(()=>[
  {
    title: "Sobre você!",
    transits: {...personalList.value},
  },
  {
    title: "Relacionamentos",
    transits: {...relationsList.value},
  },
  {
    title: "Área profissional - Missão de Vida - Propósito e Dinheiro",
    transits: {...workList.value}
  },
  {
    title: "Espiritualidade",
    transits: {...spiritualList.value}
  }
])

</script>
<template>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 mx-auto w-full md:w-8/12">
    <div class="text-center" v-for="(item,x) in personalListTitle" :key="x">
      <img class="rounded-full max-w-52 m-auto mb-5" :src="item.image" :alt="`Imagem para ${item.title}`" />
      <h2 class="mb-5">{{ item.title }}</h2>
      <p class="flex-none">
        {{ item.description }}
      </p>
    </div>
  </div>

  <section class="p-3" v-for="(section,i) in lists" :key="i" >
    <hr class="mb-5"/>
    <div class="mx-auto w-full md:w-8/12">
      <h2 class="text-teal-700 mt-3 mb-5 text-center">{{ section.title }}</h2>
      <transit-view v-for="(item,x) in section.transits" :key="x" :transit="item" />
    </div>
  </section>
</template>
