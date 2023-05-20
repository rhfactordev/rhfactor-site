<script setup>
import ETitle from "~/components/elements/ETitle.vue";
import BlogCategory from "~/components/elements/BlogCategory.vue";
import NavPagination from "~/components/elements/NavPagination.vue";
import {useNuxtApp} from "#app";
import ProductCard from "~/components/elements/ProductCard.vue";


const limit = ref(6)
const route = useRoute()
const departmentSource = computed(()=> route.params.department )
const hasDepartment = computed(()=> departmentSource.value != null)
const page = computed(()=> route.params.page ? route.params.page : 1 )

const serverUrl = computed(()=>{
  let base = `/api/store?page=${page.value}&limit=${limit.value}`
  if( hasDepartment.value ){
    base += `&department=${departmentSource.value}`
  }
  return base
})

const { data } = await useFetch(serverUrl.value)
const products = data.value.products
const departments = data.value.departments

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

const site = useNuxtApp().site
const meta = {
  title: `${department.value.name}`,
  ogTitle: `${department.value.name}`,
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
        <product-card v-for="({name, image, target, description, date, price},index) in products" :key="index"
                   :name="name"
                   :date="date"
                   :image="image"
                   :target="target"
                   :price="price"
                   :description="description" />
      </div>
      <div v-if="hasDepartment" class="text-center my-3">
        <nav-pagination :path="department.target"
                        :pages="5"
                        :current="page" />
      </div>
    </div>
    <aside class="col-span-4 md:col-span-1">
      <div class="md:sticky top-10">
        <blog-category title="Departamentos" :categories="departments" />
      </div>
    </aside>
  </main>
</template>
