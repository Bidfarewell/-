import Vue from 'vue'
import Router from 'vue-router'
import tiaozhu from '@/tiaozhu'
import aa from '../views/aa'
import bb from '../views/bb'
import tiaoa from '../components/tiaoa'

Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'tiaozhu',
      component: tiaozhu,
      children:[
      	{
      		path:'tiaoa',
      		name:'这是传说中的按钮',
      		alias:'首页',
      		component:tiaoa,
          redirect:"tiaoa/aa",
      		children:[
      			{
      				path:'aa',
      				name:'aa页面',
      				alias:'aa页面',
      				component:aa
      			},
      			{
      				path:'bb',
      				name:'bb页面',
      				alias:'bb页面',
      				component:bb
      			}
      		]
      	}
      ]
    }
    
  ]
})
export default router;