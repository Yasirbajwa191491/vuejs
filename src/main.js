import { createApp } from 'vue'
import App from './App.vue'
import Card from "./components/Card.vue"
import Child from "./components/Child.vue"
import PostData from "./components/PostData.vue"
import UpdateData from "./components/UpdateData.vue";
import Validations from "./components/Validations.vue"
import Date from "./components/Date.vue"
import {createRouter, createWebHistory} from 'vue-router'  
// import { Vuelidate } from 'vuelidate'
import VueMask, { VueMaskDirective } from 'v-mask'
import { maska } from 'maska'

const routes = [
  {
    path: '/',
    component: Card,//shsould be imported 
   
  },
  {
    path: '/post',
    component: PostData,//shsould be imported 
   
  },
  {
    path: '/child',
    component: Child,//shsould be imported 
   
  },
  {
    path: '/validate',
    component: Validations,//shsould be imported 
   
  },
  {
    path: '/date',
    component: Date,//shsould be imported 
   
  },
  {
    path: '/home/:id',
    component: UpdateData,//shsould be imported 
   
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: <h1>404 Error, Page not found</h1> },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
const app=createApp(App)
app.directive("change",(el,binding)=>{
  el.style.color=binding.value.color
})
app.directive("size",(el)=>{
  el.style.fontSize="20px";
})
app.directive('maska', maska);
// app.directive('mask', VueMask);
// app.use(VueMask);
app.use(router).mount('#app')