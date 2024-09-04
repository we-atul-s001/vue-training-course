import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Counter from './components/Counter.vue'
import CounterComponsition from './components/CounterComponsition.vue'
import HtmlSyntax from './components/HtmlSynatx.vue'
import Computed from './components/Computed.vue'

const app = createApp(App);

app.component('Counter', Counter);
app.component('CounterComponsition', CounterComponsition);
app.component('HtmlSyntax', HtmlSyntax);
app.component('Computed', Computed);

app.mount('#app');
