<template>
    <div class="p-6">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Subscriptions</h1>
        <div class="flex items-center space-x-4">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search"
            class="border px-3 py-2 rounded shadow-sm"
          />
          <button class="bg-orange-500 text-white px-4 py-2 rounded shadow">Add Subscription</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded shadow">Modify</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded shadow">Delete</button>
        </div>
      </div>
      <div class="overflow-auto max-h-64" @scroll="onScroll">
        <table class="min-w-full bg-white border rounded-lg shadow">
          <thead>
            <tr class="bg-gray-200 text-left">
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Type</th>
              <th class="px-4 py-2">Price</th>
              <th class="px-4 py-2">Period</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="subscription in filteredSubscriptions" :key="subscription.id" class="hover:bg-gray-100">
              <td class="px-4 py-2">{{ subscription.id }}</td>
              <td class="px-4 py-2">{{ subscription.type }}</td>
              <td class="px-4 py-2">{{ subscription.price }}</td>
              <td class="px-4 py-2">{{ subscription.period }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Subscriptions",
    data() {
      return {
        searchQuery: "",
        subscriptions: [
          { id: 1, type: "Monthly", price: 100, period: "1m" },
          { id: 2, type: "Yearly", price: 1000, period: "12m" },
          { id: 3, type: "Weekly", price: 30, period: "1w" },
        ],
      };
    },
    computed: {
      filteredSubscriptions() {
        return this.subscriptions.filter((subscription) =>
          Object.values(subscription)
            .join(" ")
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      },
    },
  };
  </script>
  