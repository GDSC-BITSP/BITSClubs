import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: function () {
      return import('../views/Search.vue')
    }
  },
  {
    path: '/recruitments',
    name: 'Recruitments',
    component: function () {
      return import('../views/Recruitments.vue')
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: function () {
      return import('../views/Events.vue')
    }
  },
  {
    path: '/club',
    name: 'Club',
    component: function () {
      return import('../views/Club2.vue')
    }
  },
  {
    path: '/Assocs',
    name: 'Assocs',
    component: function () {
      return import('../views/Club1.vue')
    }
  },
  {
    path: '/Depts',
    name: 'Depts',
    component: function () {
      return import('../views/Club1.vue')
    }
  },
  {
    path: '/TechTeams',
    name: 'TechTeams',
    component: function () {
      return import('../views/Club2.vue')
    }
  },
  {
    path:'/developers',
    name:'Developers',
    component: function () {
      return import ('../views/Developers.vue')
    }
  },
]

const router = new VueRouter({
	mode: "history",
	routes,
	linkExactActiveClass: "active",
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	},
});

export default router
