import Vue from 'vue'
import Router from 'vue-router'
import UnderConstruction from '@/components/UnderConstruction'
import ExperiencePage from '@/components/ExperiencePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/construction',
      name: 'UnderConstruction',
      component: UnderConstruction
    },
    {
      path: '/',
      name: 'Home',
      component: ExperiencePage
    }

  ]
})
