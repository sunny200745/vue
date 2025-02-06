import { createApp } from 'vue'
import './style.css'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import BindDirective from './components/BindDirective.vue'



import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'
import ForDirective from './components/ForDirective.vue'
import HtmlDirective from './components/HtmlDirective.vue'
import IfElseDirective from './components/IfElseDirective.vue'
import ModelDirective from './components/ModelDirective.vue'
import Dashboard from './components/dashboard/Dashboard.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        { 
            path:'/bind-directive', 
            component: BindDirective
        },
        { 
            path:'/for-directive', 
            component: ForDirective
        },
        { 
            path:'/html-directive', 
            component: HtmlDirective
        },
        { 
            path:'/if-else-directive', 
            component: IfElseDirective
        },
        { 
            path:'/model-directive', 
            component: ModelDirective
        },
        { 
            path:'/dashboard', 
            component: Dashboard
        },
        {
            path: '/',
            redirect: '/dashboard'
        },
    ]
})

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})

const app = createApp(App);
app.use(router)
app.mount('#app')
