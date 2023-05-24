<script setup type="ts">

import {useSessionStore} from "~/stores/session";

const session = useSessionStore()
const router = useRouter()

onBeforeMount(()=>{
  session.logout()
  router.push('/')
})

</script>
<template>
  <h1>Logout</h1>
</template>
