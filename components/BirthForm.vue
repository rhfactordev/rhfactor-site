<script setup>

const props = defineProps(['serviceId', 'domain'])
const router = useRouter()

const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const reDatetime = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d/

const loading = ref(false)
const cityFindInput = ref("")
const cityList = ref([])
const selectedCity = ref({})
const signupForm = ref({
  name: "",
  email: "",
  city: "",
  birthDate: "",
  serviceId: "",
  accpetedTerms: false
})

const showCityFindInput = computed(()=> selectedCity.value.value == null)
const hasServiceId = computed(()=> props.serviceId != null && props.serviceId > 0 )

const submit = async () => {
  console.log('SUBMIT')

  // Validação
  const validName = signupForm.value.name.length > 2
  const validEmail = reEmail.test(signupForm.value.email)
  const validBirthdate = reDatetime.test(signupForm.value.birthDate)
  const validCity = signupForm.value.city != null && signupForm.value.city > 0
  const validAccepted = signupForm.value.accpetedTerms == true

  console.log('Validação', validName, validEmail, validBirthdate, validCity, validAccepted)

  if (!validName || !validEmail || !validBirthdate || !validCity || !validAccepted ) {
    alert('Verifique os campos!')
    return
  }

  // Verificar Network
  if (loading.value) {
    return
  }

  signupForm.value.serviceId = props.serviceId
  loading.value = true
  const { data, error } = await useFetch(`/api/birthmap`, {
    method: 'POST',
    body: {
      name: signupForm.value.name,
      email: signupForm.value.email,
      birthdate: signupForm.value.birthDate,
      city: signupForm.value.city,
      service : signupForm.value.serviceId,
      accpetedTerms : signupForm.value.accpetedTerms
    },
    watch : false
  })
  loading.value = false

  console.log('submit', data.value, error.value)

  if( error.value == null ){
    await router.push(`/checkout/${data.value.order}/pagamento`)
    return
  }

  alert('Erro ao enviar sua requisição, verifique os campos e tente novamente!')

}

const selectCity = (city) => {
  signupForm.value.city = city.value
  selectedCity.value = city
}

const searchCity = async () => {
  if (loading.value) {
    return
  }
  loading.value = true
  const { data, error } = await useFetch(`/api/search-city?city=${cityFindInput.value}`)
  loading.value = false
  if( error.value == null ){
    cityList.value = data.value.cityList
    return
  }
}

const clearSelectedCity = () => {
  cityFindInput.value = ""
  selectedCity.value = {}
  cityList.value = []
}

onBeforeUnmount(()=>{
  clearSelectedCity()
  signupForm.value = {}
})

watch(cityFindInput, async (newVal) => {
  if (newVal.length > 2) {
    await searchCity()
  }
})
</script>


<template>

  <form @submit.prevent="submit" class="needs-validation" v-if="hasServiceId">

    <label class="text-sm" for="birthmapFormName">Nome *</label>
    <input type="text" id="birthmapFormName" class="form-control mb-3" name="name" required placeholder="Digite seu nome" v-model="signupForm.name">

    <label class="text-sm" for="birthmapFormEmail">E-mail *</label>
    <input type="email" id="birthmapFormEmail" class="form-control mb-3" name="email" required placeholder="email@domínio.com.br" v-model="signupForm.email">

    <label class="text-sm" for="birthmapFormBirthdate">Data e Hora de Nascimento</label>
    <input type="datetime-local" id="birthmapFormBirthdate" class="form-control mb-3" required name="birthdate" v-model="signupForm.birthDate">

    <label class="text-sm mb-3" for="city">Digite o nome de sua Cidade de Nascimento e clique em buscar para selecionar *</label>
    <div v-if="showCityFindInput" class="mb-5 flex">
        <input type="text" v-model.lazy="cityFindInput" id="city" class="form-control" name="city" placeholder="Cidade de Nascimento">
        <button type="button" :disabled="loading" @click="searchCity" class="btn ml-3">
          <i v-if="!loading" class="fa-solid fa-search">Buscar</i>
          <i v-else class="fa-solid fa-spinner">*</i>
        </button>
    </div>

    <ul v-if="showCityFindInput" class="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg mb-5">
      <li v-for="(item,x) in cityList" @click="selectCity(item)" :key="x" class="w-full px-4 py-2 border-b border-gray-200 hover:bg-neutral-400">{{ item.label }}</li>
    </ul>
    <div v-else class="flex mb-3">
      <input type="text" class="form-control" disabled v-model="selectedCity.label">
      <div class="input-group-append">
        <button @click="clearSelectedCity" class="btn ml-5">
          <i class="fa-solid fa-trash px-2">X</i>
        </button>
      </div>
    </div>

    <div class="mb-5">
      <input type="checkbox" class="form-check-input" v-model="signupForm.accpetedTerms" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">
        Eu autorizo o compartilhamento dos meus dados com a equipe do site {{ domain }}
      </label>
    </div>

    <button :disabled="loading" type="submit" class="bg-teal-400 hover:bg-teal-500 block text-white shadow-lg shadow-gray-300 p-6 rounded-xl w-full">
      <span class="h2 text-white">Obtenha seu Mapa Astral e mude sua vida!</span>
    </button>

  </form>
</template>

