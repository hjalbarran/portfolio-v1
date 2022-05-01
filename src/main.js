import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import ScrollAnimation from './directives/scrollanimation.js'
import FlagIcon from 'vue-flag-icon'
// import VueEasyLightbox from 'vue-easy-lightbox'

const Vue = require('vue')
const VueScrollTo = require('vue-scrollto')


const app = createApp(App)
app.directive('scrollanimation', ScrollAnimation)
app.use(store)
app.use(router)
app.use(VueScrollTo)
app.use(FlagIcon)
// app.use(VueEasyLightbox)
app.mount('#app')
