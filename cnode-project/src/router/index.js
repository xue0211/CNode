import Vue from 'vue'
import Router from 'vue-router'
import Registered from '../components/Registered'
import Login from '../components/Login'
import PostList from '../components/PostList'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'
import SideBar from '../components/SideBar'
import Sider from '../components/Sider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: PostList,
        sidebar:Sider
      }
    },
    {
      name: 'user',
      path: '/user/:name',
      components: {
        main: PostList,
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&author=:name',
      components: {
        main: Article,
        sidebar:SideBar
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components: {
        main: UserInfo
      }
    },

    {
      name: 'Login',
      path: '/login',
      components: {
        main: Login
      }
    },
    {
      name: 'registered',
      path: '/registered',
      components: {
        main: Registered
      }
    },
  ]
})
