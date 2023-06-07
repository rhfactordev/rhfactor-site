<script setup>
  import {useNuxtApp} from "#app";

  const props = defineProps(['method', 'order'])
  const router = useRouter()
  const app = useNuxtApp()
  const mp = app.mp


  const loading = ref(false)
  const payment = ref({
    order : 0,
    paymentMethodId: "",
    transactionAmount: 0,
    identificationType: "CPF",
    identificationNumber: "",
    payer: {
      email: "",
      firstName: "",
      lastName: "",
      identification: {
        number: "",
        type: "CPF",
      }
    }
  })

  const method =  computed(()=> props.method )
  const order =  computed(()=> props.order )

  const isCreditCard = computed(()=> method.value.type == 'credit-card' )
  const isPix = computed(()=> method.value.type == 'pix' )

  const verifyPayment = async () => {
    if( loading.value ){
      console.log('verifyPayment exiting...')
      return
    }
    loading.value = true
    const { data , error } = await useFetch('/api/processPayment', {
      method: 'POST',
      watch: false,
      body : payment.value
    })
    loading.value = false

    if( error.value ){
      alert(error.value.data.message)
      if( isCreditCard.value ){
        alert('Reiniciar o formulário')
      }
      return
    }

    // O Status da operação deve vir true quando foi processado
    if( data.value.status ){
      if( data.value.status == 'pending_waiting_transfer' ){
        router.push(`/checkout/${order.value.id}/pix`)
        return
      }
      router.push(`/checkout/${order.value.id}/obrigado`)
      return
    }

    alert( data.value.message )

  }

  const initCreditCard = () =>{
    loading.value = true
    console.log('Iniciarlizar formulario MP')
    try{
      /*
      mp.cardForm( {
        key : site.mercadoPagoPublicKey,
        formid: 'form-checkout',
        totalCost : order.value.total,
        description: 'descrição',
        orderId : 12
      })
      */
    }catch (e){
      console.log('[Checkout] Erro inicializar MP', e)
    }
    loading.value = false
  }

  const initPix = () => {
    loading.value = true
    // destroyCreditCard()

    loading.value = false
  }

  const destroyCreditCard = () =>{
    console.log('Destruir formulario MP')
    // mp.destroy()
  }

  const initPayment = () =>{

    payment.value = {
      order: order.value.id,
      paymentMethodId: method.value.type,
      transactionAmount: order.value.total,
      payer: {
        email: "roberto@rhfactor.com.br",
        firstName: "Roberto",
        lastName: "Alves",
        identification: {
          number: "228.838.378-05",
          type: "CPF",
        }
      }
    }

    if( isPix.value ){
      initPix()
      return
    }

    initCreditCard()
  }

  watch(
      () => method.value,
      (newValue, oldValue) => {
        if( newValue.type != oldValue.type ){
          initPayment()
        }
      },
      { deep: true }
  )

  onMounted(()=>{
    initPayment()
  })
</script>

<template>


  <div v-if="loading">
    <p class="text-center mb-5">Inicializando integração com Mercado Pago, aguarde!</p>
    <loadin-icon class="mb-10" />
  </div>

  <form v-else @submit.prevent="verifyPayment" method="post" class="w-full" id="form-checkout">

    <label for="mpFormPayerName">Nome</label>
    <input required class="form-control mb-3" v-model="payment.payer.firstName" id="mpFormPayerName" name="payerFirstName" type="text" />

    <label for="mpFormPayerLastname">Sobrenome</label>
    <input required class="form-control mb-3" v-model="payment.payer.lastName" id="mpFormPayerLastname" name="payerLastName" type="text" />

    <label for="mpFormPayerEmail">E-mail</label>
    <input required class="form-control mb-3" v-model="payment.payer.email" id="mpFormPayerEmail" name="payerEmail" type="email" />

    <label for="mpFormPayerIdentificationType">Tipo de documento</label>
    <select required class="form-control mb-3" v-model="payment.payer.identification.type" id="mpFormPayerIdentificationType" name="payerIdentificationType">
      <option value="CPF">CPF</option>
      <option value="CNPJ">CNPJ</option>
    </select>

    <label for="mpFormPayerIdentificationNumber">Número do documento</label>
    <input required class="form-control mb-3" v-model="payment.payer.identification.number" id="mpFormPayerIdentificationNumber" name="payerIdentificationNumber" type="text" />

    <!--
    <div class="row" v-if="isCreditCard">
      <div class="col-12 p-3">
        <div id="form-checkout__cardNumber" class="form-control"></div>
      </div>
    </div>
    <div class="row" v-if="isCreditCard">
      <div class="col-6">
        <div id="form-checkout__expirationDate" class="form-control"></div>
      </div>
      <div class="col-6">
        <div id="form-checkout__securityCode" class="form-control"></div>
      </div>
    </div>
    <div class="row" v-if="isCreditCard">
      <div class="col-12 p-3">
        <input type="text" value="" class="form-control" id="form-checkout__cardholderName"/>
      </div>
    </div>
    <div class="row" v-if="isCreditCard">
      <div class="col-12 p-3">
        <select class="form-control" id="form-checkout__issuer"></select>
      </div>
    </div>
    <div class="row" v-if="isCreditCard">
      <div class="col-12 p-3">
        <select class="form-control" id="form-checkout__installments"></select>
      </div>
    </div>
    <div class="row">
      <div class="col-12 p-3">
        <select class="form-control" id="form-checkout__identificationType"></select>
      </div>
    </div>
    <div class="row">
      <div class="col-12 p-3">
        <input type="text" class="form-control" value="" id="form-checkout__identificationNumber"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12 p-3">
        <input type="email" class="form-control" value="" id="form-checkout__cardholderEmail"/>
      </div>
    </div>

    -->

    <button type="submit" id="form-checkout__submit"
            class="btn px-4 py-3 w-full rounded-lg shadow mb-8">
        <span class="h4">Finalizar com {{ isPix ? 'Pix' : 'Cartão de Crédito' }}</span>
    </button>


    <!--    <progress value="0" class="progress-bar">Carregando...</progress>-->
  </form>

  <img class="mx-auto w-36" src="//http2.mlstatic.com/frontend-assets/mp-web-navigation/ui-navigation/5.32.2/mercadopago/logo__large@2x.png" alt="Logotipo Mercado Pago">
</template>
