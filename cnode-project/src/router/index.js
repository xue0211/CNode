import Vue from 'vue'
import Router from 'vue-router'

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
