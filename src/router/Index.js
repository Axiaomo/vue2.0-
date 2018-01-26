import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import NewsDetail from '@/view/newsDetail'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: "Index"
    }, {
      path: '/Index',
      name: 'Index',
      component: Index
    }, {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: NewsDetail
    }
  ]
})
