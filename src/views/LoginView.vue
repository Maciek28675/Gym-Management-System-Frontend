<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-20 w-auto" src="../assets/barbell.png" alt="Your Company">
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6"  @submit.prevent="handleLogin">
          <div>
            <label for="employee id" class="block text-sm/6 font-medium text-gray-900">Employee ID</label>
            <div class="mt-2">
              <input type="number"
                     min="0"
                     v-model="employee_id"
                     name="employee id" 
                     autocomplete="off" 
                     required="true" 
                     class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-gray-900">Gym ID</label>
            </div>
            <div class="mt-2">
              <input type="number"
                     min="0" 
                     v-model="gym_id"
                     name="gym_id" 
                     autocomplete="off" 
                     required="true" 
                     class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
               />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
            </div>
            <div class="mt-2">
              <input type="password"
                     name="password"
                     v-model="password" 
                     autocomplete="current-password" 
                     required="true" 
                     class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
               />
            </div>
          </div>
  
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 active:bg-orange-400">Sign in</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm/6 text-gray-500">
          No employee account yet?
          {{ ' ' }}
          <a href="#" class="font-semibold text-orange-600 hover:text-orange-500">Register first manager account</a>
        </p>
      </div>
      <div v-if="message" :class="messageClass" class="flex items-center justify-center text-center font-semibold mt-4 rounded-lg  h-10">
        {{ message }}
      </div>
    </div>
    <footer>
        <cite class="absolute bottom-4 right-4 text-sm text-gray-400">
          &#169 2025 Maciej Rybarczyk, Patryk Piwnicki - Politechnika Wroclawska
        </cite>
        <img class="absolute bottom-4 left-4 opacity-50 h-16 w-auto" src="../assets/logo_pwr.png">
    </footer>
  </template>

<script>
  import User from '../models/user';

  export default {
    name: 'Login',

    data() {
      return {
        employee_id: '',
        gym_id: '',
        password: '',
        role: '',
        first_name: '',
        last_name: '',
        message: '',
        messageClass: '',
    };

    },

    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },

    created() {
      if (this.loggedIn) {
        this.$router.push('/home');
      }
    },

    methods: {
      handleLogin() {
        const user = {
          employee_id: this.employee_id,
          gym_id: this.gym_id,
          password: this.password,
          role: this.role,
          first_name: this.first_name,
          last_name: this.last_name
        };

        this.loading = true;
        
        this.$store.dispatch("auth/login", user).then(
          () => {
            this.$router.push("/home");
          },
          (error) => {
            this.loading = false;
            this.message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();

            this.messageClass = "bg-red-100 text-red-800";
          }
        );
      },
    }

  }
</script>