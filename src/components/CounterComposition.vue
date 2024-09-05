<template>
    <div><h2 :class="classList">hello</h2></div>
    <button v-on:click="increaseCounter('atul', $event)">Click me</button>
    <p>{{ count }}</p>
</template>


<script setup>
import {computed, ref} from "vue";


const count = ref(0);
const increaseCounter = (name, event) =>
{
  count.value++;
  console.log(name);
  console.log(event.target.tagName);
}
</script>