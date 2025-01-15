<template>
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
    <h2 class="text-xl font-bold mb-4 text-center">Enter Subscription ID</h2>
    
    <!-- Form -->
    <form class="flex flex-col items-center">
      <input 
        type="text" 
        class="mb-4 p-2 border border-gray-300 rounded-md w-full"
        placeholder="Enter Subscription ID"
      />

      <button 
        type="submit"
        class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Check Subscription
      </button>
    </form>
    <!-- Message (conditionally displayed) -->
    <p v-if="message" class="mt-4 text-center text-red-500">Valid</p>
  </div>
</template>