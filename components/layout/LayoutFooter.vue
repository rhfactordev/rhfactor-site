<template>
  <footer
      class="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">

    <div  class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">

      <div class="mr-12 hidden lg:block">
        <span>Get connected with us on social networks:</span>
      </div>

      <!-- Social network icons container -->
      <layout-social />
    </div>

    <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. -->
    <div class="mx-6 py-10 text-center md:text-left">
      <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Tailwind Elements section -->
        <div class="">
          <h6
              class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="mr-3 h-4 w-4">
              <path
                  d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg>
            Tailwind ELEMENTS
          </h6>
          <p>
            Here you can use rows and columns to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit.
          </p>
        </div>
        <!-- Products section -->
        <div class="">
          <h6
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Products
          </h6>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Angular</a
            >
          </p>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >React</a
            >
          </p>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Vue</a
            >
          </p>
          <p>
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Laravel</a
            >
          </p>
        </div>
        <!-- Useful links section -->
        <div class="">
          <h6
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Useful links
          </h6>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Pricing</a
            >
          </p>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Settings</a
            >
          </p>
          <p class="mb-4">
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Orders</a
            >
          </p>
          <p>
            <a href="#!" class="text-neutral-600 dark:text-neutral-200"
            >Help</a
            >
          </p>
        </div>


        <div>
          <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Contato
          </h6>
          <p class="mb-4 flex items-center justify-center md:justify-start">
            New York, NY 10012, US
          </p>
          <p class="mb-4 flex items-center justify-center md:justify-start">
            info@example.com
          </p>
          <p class="flex items-center justify-center md:justify-start mb-4">
            <nuxt-link to="/termos-de-uso">Termos de uso</nuxt-link>
          </p>
          <p class="mb-4 flex items-center justify-center md:justify-start mb-4">
            <nuxt-link to="/privacidade">Política de privacidade</nuxt-link>
          </p>
        </div>
      </div>
    </div>

    <!--Copyright section-->
    <div class="p-3 text-center">
      <p class="text-xs">Desenvolvido por <a class="font-semibold text-neutral-600 dark:text-neutral-400" href="https://www.rhfactor.com.br/">RHFactor</a></p>
    </div>

  </footer>
</template>
