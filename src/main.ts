import { createApp } from 'vue'
import './style.css'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import BindDirective from './components/BindDirective.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        { path:'/directives', component: BindDirective},
    ]
})

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
