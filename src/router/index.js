import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue';
import HomeView from '../views/HomeView.vue'
import CheckSubView from '../views/CheckSubView.vue';

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
  {
    path: '/checkSubscription',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'checkSubscription',
        component: CheckSubView,
      }
    ]
  },
  {
    path: '/401',
    name: 'Unauthorized',
    component: () => import('../views/UnauthorizedView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/401', '/404'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  
  // trying to access a restricted page + not logged in
  // redirect to 401
  if (authRequired && !loggedIn) {
    next('/401');
  } else {
    next();
  }
});

export default router
