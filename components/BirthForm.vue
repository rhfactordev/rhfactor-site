<script setup>

const props = defineProps(['serviceId', 'domain'])
const router = useRouter()

const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const reDatetime = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d/

const loading = ref(false)
const cityFindInput = ref("")
const cityList = ref([])
const selectedCity = ref({"label":"Santo André, São Paulo - BR","value":"1"})
const signupForm = ref({
  name: "Roberto Fonseca Alves",
  email: "roberto@rhfactor.com.br",
  city: "1",
  birthDate: "1986-07-03T10:15",
  serviceId: "1",
  accpetedTerms: true
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

    <div class="form-group">
      Nome <i>*</i>
      <input type="text" class="form-control mt-1" name="name" required placeholder="Nome" v-model="signupForm.name">
    </div>

    <div class="form-group">
      E-mail <i>*</i>
      <input type="email" class="form-control mt-1" name="email" required placeholder="email@domínio.com.br"
             v-model="signupForm.email">
    </div>
    <div class="form-group">
      Data e Hora de Nascimento <i>*</i>
      <input type="datetime-local" class="form-control mt-1" required placeholder="Data e Hora de nascimento" name="birthdate" v-model="signupForm.birthDate">
    </div>
    <div>
      Digite o nome de sua Cidade de Nascimento e clique em buscar para selecionar <i>*</i>
      <div v-if="showCityFindInput" class="input-group mb-3 mt-1">
      <input type="text" v-model.lazy="cityFindInput" id="city" class="form-control" name="city"
             placeholder="Cidade de Nascimento">
      <div class="input-group-append">
        <button type="button" :disabled="loading" @click="searchCity" class="input-group-text" id="basic-addon2">
          <i v-if="!loading" class="fa-solid fa-search">Buscar</i>
          <i v-else class="fa-solid fa-spinner">*</i>
        </button>
      </div>
    </div>
    </div>

    <ul v-if="showCityFindInput" class="list-group mb-3">
      <li v-for="(item,x) in cityList" @click="selectCity(item)" :key="x"
          class="list-group-item list-group-item-action">{{ item.label }}
      </li>
    </ul>
    <div v-else class="input-group mb-3">
      <input type="text" class="form-control" disabled v-model="selectedCity.label">
      <div class="input-group-append">
        <button @click="clearSelectedCity" class="input-group-text" id="basic-addon2">
          <i class="fa-solid fa-trash">X</i>
        </button>
      </div>
    </div>

    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" v-model="signupForm.accpetedTerms" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">
        Eu autorizo o compartilhamento dos meus dados com a equipe do site {{ domain }}
      </label>
    </div>

    <button :disabled="loading" type="submit" class="btn btn-primary btn-lg btn-block p-3">
      <span class="h2 text-white">Solicitar Meu Mapa Astral Agora!</span>
    </button>

  </form>
</template>

