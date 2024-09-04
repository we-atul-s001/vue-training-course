<template>
  <div class="text-center">
    Counter Componenet

    <button @click.prevent="decreaseCounter()">-</button>
    <span>{{ counter }}</span>
    <button @click.prevent="increaseCounter()">+</button>
  </div>
</template>
<style>
.text-center {
    text-align: center;
    font-size: 25px;
}
</style>
<script>
export default{
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        decreaseCounter()
        {
            this.counter--;
        },

        increaseCounter()
        {
            this.counter++;
        }
    }
};
</script>
