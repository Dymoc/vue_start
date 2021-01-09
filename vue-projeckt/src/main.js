import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');

library.add(faFontAwesome);

App.component('font-awesome-icon', FontAwesomeIcon);
