// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)
import Home from './components/Homepage'
import List from './components/List'
import Shelf from './components/Shelf'
import Book from './components/book'
const routes =[
  {path:'/book',component:Book},
  {path:'/home',component:Home},
  {path:'/list',component:List},
  {path:'/shelf',component:Shelf}
]
const router =new VueRouter(
  {
    routes
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
