<template>

  <div>
    <h2>Input Binding</h2>
   <input type="text" :value="text" @input="(event) => (text = event.target.value)"/>
    <br>
    <p>{{ text }}</p>
    <br>

    <input type="text" v-model="NewTest" />
    <br>
    <p>{{ NewTest }}</p>
    <br>

    <input type="checkbox" v-model="checked">{{ checked }}
    <br>

    <input type="checkbox" v-model="checkedName" value="Atul">
    <br>

    <input type="checkbox" v-model="checkedName" value="pratap">
    <br>

    <input type="checkbox" v-model="checkedName" value="singh">
    {{ checkedName }}
  </div>

</template>

<script setup>

import {ref} from "vue";

const text = ref('Hello World');

const NewTest = ref('Hello World');

const checked = ref(false);

const checkedName = ref([]);
</script>

