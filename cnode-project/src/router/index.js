import Vue from 'vue'
import Router from 'vue-router'
import Registered from '../components/Registered'
import Login from '../components/Login'
import PostList from '../components/PostList'
import Article from '../components/Article'
import UserInfo from '../components/UserInfo'
import SlideBar from '../components/SlideBar'
import Slider from '../components/Slider'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: PostList,
        slidebar:Slider
      }
    },
    {
      name: 'user',
      path: '/user/:name',
      components: {
        main: PostList,
        slidebar:Slider
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id&author=:name',
      components: {
        main: Article,
        slidebar:SlideBar
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
