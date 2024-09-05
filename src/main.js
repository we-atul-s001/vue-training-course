import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import CounterComposition from './components/CounterComposition.vue'
import InputBinding from "./components/InputBinding.vue";


const app = createApp(App);


app.component('CounterComposition', CounterComposition);
app.component('InputBinding', InputBinding);


app.mount('#app');
