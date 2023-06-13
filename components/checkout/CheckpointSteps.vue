<script setup>
  const props = defineProps(['active'])

  // Vamos tratar esse stepper sempre para o checkout, inicioalmente

  const steps = [
    { name : 'Compra' },
    { name : 'Pagamento' },
    { name : 'Confirmação' },
  ]

</script>

<template>


  <ol class="flex flex-wrap items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
    <li class="flex md:w-full items-center text-blue-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
            <svg aria-hidden="true" class="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            Compra
        </span>
    </li>
    <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10">
        <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200">
            <span class="mr-2">2</span>
            Pagamento
        </span>
    </li>
    <li class="flex items-center">
      <span class="mr-2">3</span>
      Confirmação
    </li>
  </ol>



</template>
