import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DesignWorkout from './views/DesignWorkout.vue'
import DisplayWorkout from './views/DisplayWorkout.vue'
import Posts from '@/components/Posts'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/design-workout',
      name: 'designWorkout',
      component: DesignWorkout
    },
    {
      path: '/view-workout',
      name: 'viewWorkout',
      component: DisplayWorkout
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
