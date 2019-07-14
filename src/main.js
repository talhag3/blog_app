// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import urls from './api_endpoints'

Vue.config.productionTip = false

Vue.prototype.API = urls;

Vue.prototype.HEADER = function(){
  return {
    'Authorization': "bearer " + Vue.prototype.retriveToken(),
    'Accept':'application/json'
  }
}

Vue.prototype.retriveToken = function(){
  return localStorage.getItem("api_token") || null ;
}

Vue.prototype.saveToken = function(api_token){
  localStorage.setItem('api_token',api_token);
}

Vue.prototype.destroyToken = function(){
  localStorage.removeItem("api_token")
  localStorage.removeItem("auth_user")
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Vue.prototype.retriveToken()) {
      next({
        name: 'Login',
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
