/* eslint-disable */
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faGem } from '@fortawesome/free-regular-svg-icons';
import {
  faClock, faPhone, faEnvelope, faDolly, faArrowRight, faTemperatureLow, faBoxesStacked, faQuoteRight, faLocationDot, faGreaterThan, faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faUser, faGem, faClock, faPhone, faEnvelope, faFacebookF, faTwitter, faLinkedinIn, faDolly, faArrowRight, faTemperatureLow, faBoxesStacked, faQuoteRight, faLocationDot, faGreaterThan, faArrowUp);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
