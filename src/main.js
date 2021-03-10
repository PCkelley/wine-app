import Vue from 'vue';
import firebase from 'firebase';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueApexCharts from 'vue-apexcharts';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Buefy, VueApexCharts);
Vue.component('apexchart', VueApexCharts);

const firebaseConfig = {
  apiKey: 'AIzaSyBZDWDDGKC0n1S9Ibac7si9JN8QTpMHgSU',
  authDomain: 'wine-app-55e0c.firebaseapp.com',
  projectId: 'wine-app-55e0c',
  storageBucket: 'wine-app-55e0c.appspot.com',
  messagingSenderId: '148039201807',
  appId: '1:148039201807:web:083b2803fdbe6a7ffcdf7a',
  measurementId: 'G-7MK7TRPT0H',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
