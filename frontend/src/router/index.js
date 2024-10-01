import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/views/Layout.vue'
import HomeView from '@/views/Home'
import ForumView from '@/views/Forum'
import CalendarView from '@/views/Calendar'
import ProfileView from '@/views/Profile'
import LoginView from '@/views/Login'
import RegisterView from '@/views/Register'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: HomeView
      },
      {
        path: 'forum',
        name: 'forum',
        component: ForumView
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: CalendarView
      },
      {
        path: 'profile',
        name: 'profile',
        component: ProfileView
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  console.log("router before..");
  next();
});

export default router
