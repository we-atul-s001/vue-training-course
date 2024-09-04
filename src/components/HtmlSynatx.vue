<template>
  <div class="text-center" v-html="helloworld"></div>
</template>

<script setup>
const helloworld = "Hello";
</script>

<style>
.text-center {
  text-align: center;
  font-size: 25px;
}
</style>
