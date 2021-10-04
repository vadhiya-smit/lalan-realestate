import Vue from 'vue'
import router from 'vue-router'

import Home from '../pages/Home.vue'
import Agents from '../pages/Agents.vue'
import AgentProfile from '../pages/AgentProfile.vue'
import Agency from '../pages/Agency.vue'
import AgencyProfile from '../pages/AgencyProfile.vue'
import SingleProperty from '../pages/SingleProperty.vue'
import Properties from '../pages/Properties.vue'
import AboutUs from '../pages/AboutUs.vue'
import ContactUs from '../pages/ContactUs.vue'
import AddProperty from '../pages/AddProperty.vue'

Vue.use(router)

const myRouter =  new router({

    mode : 'history',

    routes : [
        {
            path : '/',
            component : Home
        },
        {
            path : '/agents',
            component : Agents
        },
        {
            path : '/agent/:id',
            component : AgentProfile
        },
        {
            path : '/agency',
            component : Agency
        },
        {
            path : '/agency/:id',
            component : AgencyProfile
        },
        {
            path : '/property',
            component : Properties,
        },
        {
            path : '/property/:id',
            component : SingleProperty
        },
        {
            path : '/add-property',
            component : AddProperty
        },
        {
            path : '/about',
            component : AboutUs
        },
        {
            path : '/contact',
            component : ContactUs
        },
    ]
})

myRouter.beforeEach((to,from,next) => {
    next()
})

export default myRouter