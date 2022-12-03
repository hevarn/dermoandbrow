import { createApp } from 'vue'
import '@/assets/main.scss'
import App from './App.vue'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import axios from 'axios'
import mitt from 'mitt'
import VueAxios from 'vue-axios'
import Flickity from 'flickity'


 Splitting();
const emitter = mitt();
let app = createApp(App)
app.use(VueAxios, axios, Flickity)
app.config.emitter = emitter;
app.mount('#app')
