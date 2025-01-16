import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue';
import HomeView from '../views/HomeView.vue'
import CheckSubView from '../views/CheckSubView.vue';
import EmployeesView from '../views/EmployeesView.vue';
import AddEmployee from '../views/AddEmployee.vue';
import UpdateEmployee from '../views/UpdateEmployee.vue';

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
    path: '/checkSubscription',
    component: MainLayout,
    meta: {tab: "Check Membership"},
    children: [
      {
        path: '',
        name: 'checkSubscription',
        component: CheckSubView,
      }
    ]
  },
  {
    path: '/employees',
    component: MainLayout,
    meta: {tab: 'Employees'},
    children: [
      {
        path: '',
        name: 'employees',
        component: EmployeesView,
      }
    ]
  },
  {
    path: '/AddEmployee',
    component: MainLayout,
    meta: {tab: 'Add Employee'},
    children: [
      {
        path: '',
        name: 'Add Employee',
        component: AddEmployee,
      }
    ]
  },
  {
    path: '/UpdateEmployee',
    component: MainLayout,
    meta: {tab: 'Update Employee'},
    children: [
      {
        path: '',
        name: 'Update Employee',
        component: UpdateEmployee,
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
