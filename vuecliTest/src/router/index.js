import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/Hi',
      name: 'Hi',
      component: Hi
    },
    {
      path: '/Hi1',
      name: 'Hi1',
      component: Hi1
    }
  ]
})
