import Vue from 'vue'
import Router from 'vue-router'
import UnderConstruction from '@/components/UnderConstruction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UnderConstruction',
      component: UnderConstruction
    }
  ]
})
