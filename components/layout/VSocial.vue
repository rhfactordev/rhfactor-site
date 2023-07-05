<script setup>
  defineProps(["social"])
</script>
<template>
  <div class="flex justify-center">
    <a v-for="({name, target, icon},index) in social"
       :title="name"
       :href="target"
       :key="index"
       target="_blank"
       class="mr-3 text-neutral-200 hover:text-white">
      <span class="hidden"> {{ name }} </span>
      <IconCSS :name="icon" />
    </a>
  </div>
</template>
