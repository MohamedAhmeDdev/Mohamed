import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/index.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab} from '@fortawesome/free-brands-svg-icons';
library.add(fab, )

createApp(App).use(store).use(router).component('fa', FontAwesomeIcon).mount('#app')
