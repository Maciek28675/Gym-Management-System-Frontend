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
              <span class="ml-3">Employees</span>
            </a>
          </li>
          <li class="my-px">
            <span class="flex font-bold text-sm text-white px-3 my-4 uppercase">Receptionist</span>
          </li>
          <li class="my-px">
            <span class="flex font-bold text-sm text-white px-3 my-4 uppercase">Coach</span>
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
                                    focus-visible:outline-orange-600">
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
                        <span class="font-semibold leading-none">Anal Omar</span>
                        <span class="text-gray-500 text-sm leading-none mt-1">Coach</span>
                    </span>
                </div>
            </div>
        </header>
        <div class="main-content flex flex-col flex-grow p-4">
            <h1 class="font-bold text-2xl text-gray-700">Home</h1>

        <div
          class="flex flex-col flex-grow items-center justify-center shadow bg-white rounded mt-4"
        >
            <img src="../assets/barbell.png" class="mx-auto h-20 w-auto"/>
            <span class="font-bold text-4xl text-gray-700 mt-10">Welcome to the Gym Management</span>
            <span class="mt-4 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Use sidebar to navigate the system</span>
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