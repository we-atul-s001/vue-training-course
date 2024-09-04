import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import CounterComposition from './components/CounterComposition.vue'


const app = createApp(App);


app.component('CounterComposition', CounterComposition);


app.mount('#app');
