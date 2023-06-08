<script setup>
const props = defineProps(['paymentOptions'])
const emit = defineEmits(['onSelectPaymentMethod'])

const selectedOption = ref(0)
const paymentOptions = computed(()=>props.paymentOptions!=null?props.paymentOptions:[])

const getIcon = (id) => id == selectedOption.value ? 'mdi:check-circle' : 'mdi:checkbox-blank-circle-outline'
const select = ( payment ) => {
  if( !payment.id ){
    return
  }
  selectedOption.value = payment.id
  emit('onSelectPaymentMethod', payment)
}

const last = computed(()=> paymentOptions.value.length-1)

const selectFirst = () =>{
  if( paymentOptions.value.length )
  select(paymentOptions.value[0])
}

onMounted(()=>{
  selectFirst()
})

</script>

<template>
  <ul class="text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-lg">
    <li v-for="(payment,i) in paymentOptions" @click="select(payment)" :class="{'rounded-t-lg':i==0, 'rounded-b-lg' : i==last ,'bg-neutral-400 text-white':payment.id==selectedOption}" :key="i"
        class="w-full px-4 py-3 border-b border-gray-200 hover:bg-neutral-300 flex">
        <Icon :name="getIcon(payment.id)" class="mr-3 text-black" />
      <span class="pt-1">{{payment.name}}</span>
    </li>
  </ul>
</template>
