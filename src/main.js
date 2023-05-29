import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab} from '@fortawesome/free-brands-svg-icons';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { inject } from '@vercel/analytics';
library.add(fab, fas)

createApp(App)
.use(store)
.use(router)
.component('fa', FontAwesomeIcon)
.component('inject', inject)
.mount('#app')
