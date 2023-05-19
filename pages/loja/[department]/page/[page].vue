<script setup>
import ETitle from "~/components/elements/ETitle.vue";
import BlogCategory from "~/components/elements/BlogCategory.vue";
import NavPagination from "~/components/elements/NavPagination.vue";
import {useNuxtApp} from "#app";

const route = useRoute()
const departmentSource = computed(()=> route.params.department )
const page = computed(()=> route.params.page ? route.params.page : 1 )

const hasDepartment = computed(()=> departmentSource.value != null)

const department = computed(()=>{
  if( hasDepartment.value ){
    return departments.filter(it=> it.source == departmentSource.value)[0]
  }
  return {
    name: 'Loja Virtual',
    description : 'Loja virtual do site',
    image : 'image'
  }
})

const departments = [
  {
    name: 'Departamento 1',
    source: 'departamento-1',
    target: '/loja/departamento-1',
    description: 'Descrição do departamento 1',
    image : 'image'
  },
  {
    name: 'Departamento 2',
    source: 'departamento-2',
    target: '/loja/departamento-2',
    description: 'Descrição do departamento 1',
    image : 'image'
  }
]

const site = useNuxtApp().site
const meta = {
  title: `${department.value.name} - ${site.title}`,
  ogTitle: `${department.value.name} - ${site.title}`,
  description: department.value.description,
  ogDescription: department.value.description,
  ogImage: department.value.image
}

useSeoMeta(meta)
useServerSeoMeta(meta)

</script>

<template>
  <main class="grid grid-cols-4 gap-2">
    <e-title class="col-span-4">{{department.name}}</e-title>
    <div class="md:order-2 col-span-4 md:col-span-3 p-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        Você está na {{department.name}}
        E está na página {{page}}
      </div>
      <div v-if="hasDepartment" class="text-center my-3">
        <nav-pagination :path="department.target"
                        :pages="5"
                        :current="page" />
      </div>
    </div>
    <aside class="col-span-4 md:col-span-1">
      <div class="md:sticky top-0">
        <blog-category title="Departamentos" :categories="departments" />
      </div>
    </aside>

  </main>
</template>
