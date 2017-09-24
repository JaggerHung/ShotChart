import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Roster from '@/components/Roster'
import Livestats from '@/components/Livestats'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/roster',
      name: 'Roster',
      component: Roster
    },
    {
      path: '/livestats',
      name: 'livestats',
      component: Livestats
    }
  ]
})
