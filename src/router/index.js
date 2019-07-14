import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Master from '@/components/Master'
import Logout from '@/components/Logout'

import Messanger from '@/components/Messanger/Messanger';

import post_edit from '@/components/Posts/edit'
import full_post from '@/components/Posts/full'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: Master,
      children: [
        { path: '/', component: Home , name:"Home"},
        { path: 'logout',component: Logout },
        {
          path: '/post/edit/:id',
          component: post_edit,
          name:'post.edit'
        },
        {
          path: '/post/:id',
          component: full_post,
          name:'post.view'
        },
        {
          path: '/messanger',
          component: Messanger,
          name:'post.view'
        }
      ],
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
