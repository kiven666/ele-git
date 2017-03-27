import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '../components/Homepage'
import Search from '../components/search'
import Order from '../components/order'
import Login from '../components/login'
import Myzone from '../components/myzone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
    	path:'/search/:keyword',
    	name:'search',
    	component:Search
    },
    {
      path:'/order',
      name:'order',
      component:Order
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/myzone',
      name:'myzone',
      component:Myzone
    }

  ]
})
