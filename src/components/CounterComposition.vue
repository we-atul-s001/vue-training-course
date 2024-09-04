<template>
    <div><h2>hello</h2></div>
    <button v-on:click="$event => count++">Click me</button>
    <p>{{ count }}</p>
</template>


<script setup>
import { ref } from "vue";


const count = ref(0);
</script>