import { createWebHistory, createRouter } from 'vue-router'
import HomeView from './components/HomeView.vue'
import BlogPostList from './components/BlogPostList.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/blogPosts', component: BlogPostList },
    ]
})