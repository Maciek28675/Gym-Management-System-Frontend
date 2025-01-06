<template>
    <main class="grid min-h-full place-items-center bg-grey-50 px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-lg font-bold text-orange-600">401</p>
        <h1 class="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Access Denied</h1>
        <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">You do not have sufficient permissions to access this resource</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <button @click="goToHome" class="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Go back home</button>
        </div>
      </div>
    </main>

    <footer>
        <cite class="absolute bottom-4 right-4 text-sm text-gray-400">
          &#169 2025 Maciej Rybarczyk, Patryk Piwnicki - Politechnika Wroclawska
        </cite>
        <img class="absolute bottom-4 left-4 opacity-50 h-16 w-auto" src="../assets/logo_pwr.png">
    </footer>

</template>

<script>
    export default {
        methods: {
            goToHome() {
                this.$router.push('/401');
            }
        }
    };
</script>