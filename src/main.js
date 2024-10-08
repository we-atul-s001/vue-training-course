import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import CounterComposition from './components/CounterComposition.vue'
import InputBinding from "./components/InputBinding.vue";
import Watcher from "./components/Watcher.vue";


const app = createApp(App);


app.component('CounterComposition', CounterComposition);
app.component('InputBinding', InputBinding);
app.component('Watcher', Watcher);


app.mount('#app');
