<template>

  <div>
    <h2>Hello Watcher</h2>

    <p>Answer the question in yes / no</p>

    <input type="text" v-model="question" />
    <p>Answer: {{answer}}</p>
  </div>
</template>
<script setup>

import {ref, watch} from "vue";

const question = ref('');

const answer = ref('Not yet answered ?');

const result = ref('')

watch(question, async (newQuestion ,oldQuestion) => {

  if(newQuestion.indexOf('?') > -1)
  {
    answer.value = "Thinking...";
    result.value = '';

    try {
      const res = await fetch('https://yesno.wtf/api');
      const resJson = await res.json();
      result.value = resJson;
      answer.value = resJson.answer;
    }
    catch (e) {
      answer.value = 'Error occurred';
    }
  }
});
</script>
