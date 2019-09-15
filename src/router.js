import Vue from 'vue'
import Router from 'vue-router'
import Me from './views/Me.vue'
import Form from './views/Form.vue'
import Reports from './views/Reports.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
        path: '/',
        name: 'Me',
        component: Me
    },
    {
        path: '/form',
        name: 'Form',
        component: Form
    },
    {
        path: '/reports/weeks/:id',
        name: 'Reports',
        props: true,
        component: Reports
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
