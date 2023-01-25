import { createApp } from 'vue';
import {createRouter,createWebHistory} from 'vue-router';
import App from './App.vue'
import vuetify from './plugins/vuetify';
import AllCatigory from './components/AllCatigory.vue';
import NewProducts from './components/NewProducts.vue';
import OneCatigory from './components/OneCatigory.vue';
import TheCatigorys from './components/TheCatigorys.vue';
import store from './index.js';
const router=createRouter({
history:createWebHistory(),
routes:[
  {path:'/thecat',component:TheCatigorys},
  {path:'/onecat',component:OneCatigory},
  {path:'/',component:AllCatigory},
  { path:'/newproduct',component:NewProducts,name:'newproducts'},
  { path:'/newproduct/:id',component:NewProducts,name:'newproduct'},
  {path:'/cattigories',component:AllCatigory},]

})
const app=createApp(App);
app.use(router)
  app.use(vuetify);
  app.use(store)
  .mount('#app')
