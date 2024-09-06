<template>

  <h1>Form HTTP</h1>

  <form @submit.prevent="submitForm">
    <input type="text" v-model="postData.name" placeholder="Enter Name">
    <input type="text" v-model="postData.email" placeholder="Enter Email">
    <button type="submit">Submit</button>
  </form>
</template>

<script>

import axios from "axios";

export default {

  data() {
    return {
      postData: {
        name: '',
        email: ''
      }
    }
  },
        methods:{
          submitForm(){
            fetch('https://jsonplaceholder.typicode.com/posts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: this.name,
                email: this.email
              })
            })
            .then(response => response.json())
            .then(data => console.log(data))
          }

  }
}

</script>

