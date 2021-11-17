import Vue from 'vue'
import VueRouter from 'vue-router'

import Sensores from './componentes/Sensores.vue'
import Actuadores from './componentes/Actuadores.vue'
import Reporting from './componentes/Reporting.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/sensores'},
        {path: '/sensores', component: Sensores},
        {path: '/actuadores', component: Actuadores},
        {path: '/reporting', component: Reporting},
    ]

})