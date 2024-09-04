import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue'
import CounterComponsition from './components/CounterComponsition.vue'

const app = createApp(App);

app.component('Counter', Counter);
app.component('CounterComponsition', CounterComponsition);

app.mount('#app');
