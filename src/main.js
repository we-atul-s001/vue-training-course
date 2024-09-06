import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import CounterComposition from './components/CounterComposition.vue'
import InputBinding from "./components/InputBinding.vue";
import Watcher from "./components/Watcher.vue";
import Props from "./components/Props.vue";
import Http from "./components/HTTP.vue";
import FormHttp from "./components/FormHttp.vue";
import router from './router';


const app = createApp(App);


// app.component('CounterComposition', CounterComposition);
// app.component('InputBinding', InputBinding);
// app.component('Watcher', Watcher);
// app.component('Props', Props);
// app.component('Http', Http);
// app.component('FormHttp', FormHttp);

app.use(router);


app.mount('#app');
