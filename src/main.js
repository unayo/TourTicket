import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import { Carousel, Slide } from '@jambonn/vue-concise-carousel';
import '@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import { setupI18n } from './i18n'

// component
import Menu from './components/Global/Menu.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(setupI18n())

app.component('Carousel', Carousel)
app.component('Slide', Slide)
app.component('Menu', Menu)

app.mount('#app')
