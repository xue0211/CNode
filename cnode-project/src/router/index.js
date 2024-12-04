import Vue from 'vue'
import Router from 'vue-router'
import Registered from '../components/Registered'
import Login from '../components/Login'

Vue.use(Router)

export default new Router({
    routes:[
      {
        name:'Login',
        path:'/login',
        components:{
          main:Login
        }
      },
      {
        name:'registered',
        path:'/registered',
        components:{
          main:Registered
        }
      },
    ]
})
