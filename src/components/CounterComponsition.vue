<template>
  <div class="text-center">
    Counter by Composition API

    <button @click.prevent="decreaseCounter()">-</button>
    <span>{{ counter }}</span>
    <button @click.prevent="increaseCounter()">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

function increaseCounter() {
  counter.value++;
}

function decreaseCounter() {
  counter.value--;
}
</script>
<style>
.text-center {
  text-align: center;
  font-size: 25px;
}
</style>
