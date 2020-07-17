import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "bootstrap";
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  methods: { },
  
 
 
  render: h => h(App)
}).$mount("#app");

