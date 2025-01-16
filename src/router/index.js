import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue';
import HomeView from '../views/HomeView.vue'

const routes = [    
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')  
  },
  {
    path: '/home',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      }
    ]
  },
  {
    path: '/401',
    name: 'Unauthorized',
    component: () => import('../views/UnauthorizedView.vue')
  },
  {
    path: "/employees",
    name: "Employees",
    component: () => import("../views/EmployeesView.vue"),
  },  
  {
    path: "/subscriptions",
    name: "Subscriptions",
    component: () => import("../views/SubscriptionsView.vue"),
  },
  {
    path: "/gyms",
    name: "Gyms",
    component: () => import("../views/GymsView.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
