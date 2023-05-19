<script setup>
defineProps(['type'])
</script>
<template>
  <div class="alert" :class="type">
    <p><slot /></p>
  </div>
</template>
