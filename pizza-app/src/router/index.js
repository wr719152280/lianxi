import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Home from '../components/Home'
import Admin from '../components/Admin'
import Register from '../components/Register'
import Login from '../components/Login'
import Menu from '../components/Menu'
import About from '../components/About/About.vue'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path:"/",
      name:"Home",
      component:Home
    },
    {
      path:"/admin",
      name:"Admin",
      component:Admin
    },
    {
      path:"/register",
      name:"Register",
      component:Register
    },
    {
      path:"/login",
      name:"Login",
      component:Login
    },
    {
      path:"/menu",
      name:"Menu",
      component:Menu
    },
    {
      path:"/about",
      name:"About",
      component:About
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if (!store.state.isLogin){
    if (to.path == '/login' || to.path == '/register'){
      next()
    } else {
      store.dispatch('getChangeAlert','请登录')
      next('/login')
    }
  }else {
    next()
  }
})

export default router
