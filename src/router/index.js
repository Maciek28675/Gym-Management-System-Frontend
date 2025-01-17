import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue';
import HomeView from '../views/HomeView.vue'
import CheckSubView from '../views/CheckSubView.vue';
import EmployeesView from '../views/EmployeesView.vue';
import AddEmployee from '../views/AddEmployee.vue';
import UpdateEmployee from '../views/UpdateEmployee.vue';
import UpdateCustomer from '../views/UpdateCustomer.vue';
import UpdateProduct from '../views/UpdateProduct.vue';
import AddCustomer from '../views/AddCustomer.vue';
import AddGymClass from '../views/AddGymClass.vue';
import DeleteCustomer from '../views/DeleteCustomer.vue';
import UpdateGymClass from '../views/UpdateGymClass.vue';
import GymClassesView from '../views/GymClassesView.vue';
import DeleteEmployee from '../views/DeleteEmployee.vue';
import SubscriptionsView from '../views/SubscriptionsView.vue';
import AddSubscription from '../views/AddSubscription.vue';
import UpdateSubscription from '../views/UpdateSubscription.vue';
import DeleteSubscription from '../views/DeleteSubscription.vue';

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
    path: '/UpdateCustomer',
    component: MainLayout,
    meta: {tab: 'Update Customer'},
    children: [
      {
        path: '',
        name: 'Update Customer',
        component: UpdateCustomer,
      }
    ]
  },
  {
    path: '/UpdateProduct',
    component: MainLayout,
    meta: {tab: 'Update Product'},
    children: [
      {
        path: '',
        name: 'Update Product',
        component: UpdateProduct,
      }
    ]
  },
  {
    path: '/AddCustomer',
    component: MainLayout,
    meta: {tab: 'Add Customer'},
    children: [
      {
        path: '',
        name: 'Add Customer',
        component: AddCustomer,
      }
    ]
  },
  {
    path: '/AddGymClass',
    component: MainLayout,
    meta: {tab: 'Add GymClass'},
    children: [
      {
        path: '',
        name: 'Add GymClass',
        component: AddGymClass,
      }
    ]
  },
  {
    path: '/DeleteCustomer',
    component: MainLayout,
    meta: {tab: 'Delete Customer'},
    children: [
      {
        path: '',
        name: 'Delete Customer',
        component: DeleteCustomer,
      }
    ]
  },
  {
    path: '/DeleteGymClass',
    component: MainLayout,
    meta: {tab: 'Delete GymClass'},
    children: [
      {
        path: '',
        name: 'Delete GymClass',
        component: DeleteGymClass,
      }
    ]
  },
  {
    path: '/UpdateGymClass',
    component: MainLayout,
    meta: {tab: 'Update GymClass'},
    children: [
      {
        path: '',
        name: 'Update GymClass',
        component: UpdateGymClass,
      }
    ]
  },
  {
    path: '/gymclasses',
    component: MainLayout,
    meta: {tab: 'GymClasses'},
    children: [
      {
        path: '',
        name: 'gymclasses',
        component: GymClassesView,
     }
  },
  {
    path: '/DeleteEmployee',
    component: MainLayout,
    meta: {tab: 'Delete Employee'},
    children: [
      {
        path: '',
        name: 'Delete Employee',
        component: DeleteEmployee,
      }
    ]
  },
  {
    path: '/subscriptions',
    component: MainLayout,
    meta: {tab: 'Subscriptions'},
    children: [
      {
        path: '',
        name: 'Subscriptions',
        component: SubscriptionsView,
      }
    ]
  },
  {
    path: '/AddSubscription',
    component: MainLayout,
    meta: {tab: 'Add Subscription'},
    children: [
      {
        path: '',
        name: 'Add Subscription',
        component: AddSubscription,
      }
    ]
  },
  {
    path: '/UpdateSubscription',
    component: MainLayout,
    meta: {tab: 'Update Subscription'},
    children: [
      {
        path: '',
        name: 'Update Subscription',
        component: UpdateSubscription,
      }
    ]
  },
  {
    path: '/DeleteSubscription',
    component: MainLayout,
    meta: {tab: 'Delete Subscription'},
    children: [
      {
        path: '',
        name: 'Delete Subscription',
        component: DeleteSubscription,
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
