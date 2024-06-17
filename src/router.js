import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactUs from '@/views/ContactUs.vue'
const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  {path:'/contact', component: ContactUs}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
