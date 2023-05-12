<template>
  <div>
    <header class="text-center">
      RH Factor
      <nav>
        <ul>
          <li>
            <nuxt-link to="/cadastro">Cadastro</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
    <footer>
      Footer

      <nuxt-link to="/termos-de-uso">Termos de uso</nuxt-link>
      <nuxt-link to="/privacidade">Política de privacidade</nuxt-link>

    </footer>
  </div>
</template>
