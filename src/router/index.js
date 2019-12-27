import Vue from 'vue'
import VueRouter from 'vue-router'
import second from "../components/second";
import first from "../components/first";
import third from "../components/third";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'first',
    component: first
  },
  {
    path: '/second',
    name: 'second',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: second
  },
  {
    path: '/third',
    name: 'third',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: third
  }
]

const router = new VueRouter({
  routes
})

export default router
