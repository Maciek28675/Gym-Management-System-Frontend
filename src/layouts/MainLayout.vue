<template>
    <div class="flex flex-row min-h-screen bg-gray-50 text-gray-800">
        <aside
          class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-orange-500"
        >
          <div class="sidebar-header flex items-center justify-center py-4">
            <div class="inline-flex">
                <span class="leading-10 text-gray-100 text-xl font-bold ml-1 uppercase">Gym Management</span>
            </div>
          </div>
          <div class="sidebar-content px-4 py-6">
            <ul class="flex flex-col w-full">
              <li class="my-px">
                <span class="flex font-bold text-base text-white px-2 my-4 uppercase">Home</span>
              </li>  
              <li class="my-px">
                <span class="flex font-bold text-sm text-white px-3 my-4 uppercase">Manager</span>
              </li>
              <li class="my-px">
                <button
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-white hover:bg-orange-600 hover:font-semibold active: bg-orange-500"
                >
                  <span class="flex items-center justify-center text-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" 
                              stroke-linejoin="round" 
                              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </span>
                  <router-link to='/employees'class="ml-3">Employees</router-link>
                </button>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-white hover:bg-orange-600 hover:font-semibold"
                >
                  <span class="flex items-center justify-center text-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </span>
                  <router-link to='/Schedule'class="ml-3">Schedule</router-link>
                </a>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-white hover:bg-orange-600 hover:font-semibold"
                >
                  <span class="flex items-center justify-center text-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </span>
                  <router-link to='/subscriptions'class="ml-3">Subscriptions</router-link>
                </a>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-white hover:bg-orange-600 hover:font-semibold"
                >
                  <span class="flex items-center justify-center text-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                  </span>
                  <router-link to='/Gyms'class="ml-3">Gyms</router-link>
                </a>
              </li>
              <li class="my-px">
                <span class="flex font-bold text-sm text-white px-3 my-4 uppercase">Receptionist</span>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-white hover:bg-orange-600 hover:font-semibold"
                >
                  <span class="flex items-center justify-center text-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </span>
                  <span class="ml-3">Clients</span>
                </a>
              </li>
              <li class="my-px">
                <button
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-white hover:bg-orange-600 hover:font-semibold active:bg-orange-400"
                >
                  <span class="flex items-center justify-center text-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </span>
                  <router-link to='/CheckSubscription'class="ml-3">Check membership</router-link>
                </button>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-white hover:bg-orange-600 hover:font-semibold"
                >
                  <span class="flex items-center justify-center text-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                  </span>
                  <span class="ml-3">Store</span>
                </a>
              </li>
              <li class="my-px">
                <span class="flex font-bold text-sm text-white px-3 my-4 uppercase">Coach</span>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-white hover:bg-orange-600 hover:font-semibold"
                >
                  <span class="flex items-center justify-center text-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                    </svg>
                  </span>
                  <span class="ml-3">Classes</span>
                </a>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-white hover:bg-orange-600 hover:font-semibold"
                >
                  <span class="flex items-center justify-center text-lg text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </span>
                  <span class="ml-3">Participants</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
            <header class="header bg-white shadow py-4 px-4">
                <div class="header-content flex items-center flex-row">
                    <div class="flex flex-row px-4">
                        <span class="font-semibold px-2">Today is:</span>
                        <span class="font-semibold text-orange-600">04/01/2025</span>
                    </div>
                    <div class="flex flex-row px-4">
                        <span class="font-semibold px-2">Gym:</span>
                        <span class="font-semibold text-orange-600">Sky Tower</span>
                    </div>
                    <div class="flex flex-row px-4">
                        <span class="font-semibold px-2">Notifications:</span>
                        <span class="font-semibold text-orange-600">3</span>
                    </div>
                    <div class="flex flex-row px-4">
                        <span class="font-semibold px-2">Current session:</span>
                        <span class="font-semibold text-orange-600">00:14:27</span>
                    </div>
                    <div class="flex flex-row px-4">
                        <button type="submit" 
                                class="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 
                                       text-sm font-semibold text-white shadow-sm hover:bg-orange-500 
                                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                        focus-visible:outline-orange-600 active:bg-orange-400"
                                @click="handleLogout"  >
                          Sign out
                        </button>
                    </div>
                    <div class="flex ml-auto">
                        <!--<img
                            src="../assets/barbell.png"
                            class="h-10 w-10"
                        />-->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="size-9 stroke-orange-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
    
                        <span class="flex flex-col ml-2">
                            <span class="font-semibold leading-none">{{ user.first_name }} {{ user.last_name }}</span>
                            <span class="text-gray-500 text-sm leading-none mt-1">{{ user.role }}</span>
                        </span>
                    </div>
                </div>
            </header>
            <div class="main-content flex flex-col flex-grow p-4">
                <h1 class="font-bold text-2xl text-gray-700">{{ currentTab }}</h1>
            <div class="flex flex-col flex-grow items-center justify-center shadow bg-white rounded mt-4">
               <!-- Main Content depending on view-->
                <router-view/>
            </div>
          </div>
          <footer class="footer px-4 py-6">
            <div class="footer-content">
              <p class="text-sm text-gray-600 text-center">&#169 2025 Maciej Rybarczyk, Patryk Piwnicki - Politechnika Wroclawska</p>
            </div>
          </footer>
        </main>
      </div>
    </template>
    
    <script>
      export default {
        name: 'Home',
        
        computed: {
          user() {
            const first_name = localStorage.getItem("first_name");
            const last_name = localStorage.getItem("last_name");
            const role = localStorage.getItem("role");

            return { first_name, last_name, role };
          },

          currentTab() {
            return this.$route.meta.tab;
          }
        },
    
        methods: {
          handleLogout() {
            this.$store.dispatch("auth/logout").then(
              () => {
                this.$router.push("/login");
              },
            );
          }
        }
    
      }
    </script>