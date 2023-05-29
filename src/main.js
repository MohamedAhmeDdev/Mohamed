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
import { Analytics } from '@vercel/analytics';
library.add(fab, fas);

const app = createApp(App);
app.use(store);
app.use(router);
app.component('fa', FontAwesomeIcon);
app.component('Analytics', Analytics);

app.mount('#app');