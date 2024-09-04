<template>
  <div class="text-center">
    Counter by Composition API

    <button @click.prevent="decreaseCounter()" v-if="counter == 10">-</button>
    <span>{{ counter }}</span>
    <button @click.prevent="increaseCounter()">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);

/**
 * Increments the counter by 1.
 */
function increaseCounter() {
  counter.value++;
}

/**
 * Decrements the counter by 1.
 */
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
