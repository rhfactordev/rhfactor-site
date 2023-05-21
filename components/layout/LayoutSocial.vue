<script setup>
  defineProps(["social"])
</script>
<template>
  <div class="flex justify-center">
    <a v-for="({name, target, icon},index) in social"
       :title="name"
       :href="target"
       :key="index"
       class="mr-6 text-neutral-200 hover:text-white">
      <IconCSS :name="icon" />
    </a>
  </div>
</template>

