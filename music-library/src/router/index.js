import Vue from 'vue'
import Router from 'vue-router'
import musicIndex from '@/components/musicIndex'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'musicIndex',
        component: musicIndex
    }]
})
