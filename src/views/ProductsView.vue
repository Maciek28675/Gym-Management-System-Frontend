<template>
    <div class="p-6">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Products</h1>
        <div class="flex items-center space-x-4">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search"
            class="border px-3 py-2 rounded shadow-sm"
          />
          <button class="bg-orange-500 text-white px-4 py-2 rounded shadow">Add Product</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded shadow">Modify</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded shadow">Delete</button>
        </div>
      </div>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold">Total Revenue</h2>
        <div class="bg-gray-200 text-center px-4 py-2 rounded shadow w-20">
          {{ totalRevenue }}
        </div>
      </div>
      <div class="overflow-auto max-h-64">
        <table class="min-w-full bg-white border rounded-lg shadow">
          <thead>
            <tr class="bg-gray-200 text-left">
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">In Stock</th>
              <th class="px-4 py-2">Sold</th>
              <th class="px-4 py-2">Price</th>
              <th class="px-4 py-2">Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.id" class="hover:bg-gray-100">
              <td class="px-4 py-2">{{ product.id }}</td>
              <td class="px-4 py-2">{{ product.name }}</td>
              <td class="px-4 py-2">{{ product.inStock }}</td>
              <td class="px-4 py-2">{{ product.sold }}</td>
              <td class="px-4 py-2">{{ product.price }}</td>
              <td class="px-4 py-2">{{ product.totalRevenue }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Products",
    data() {
      return {
        searchQuery: "",
        products: [
          { id: 1, name: "Olimp Protein Bar", inStock: 25, sold: 7, price: 8, totalRevenue: 56 },
          { id: 2, name: "Optimum Whey", inStock: 15, sold: 5, price: 10, totalRevenue: 50 },
          { id: 3, name: "Creatine Monohydrate", inStock: 30, sold: 10, price: 12, totalRevenue: 120 },
        ],
      };
    },
    computed: {
      filteredProducts() {
        return this.products.filter((product) =>
          Object.values(product)
            .join(" ")
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      },
      totalRevenue() {
        return this.products.reduce((sum, product) => sum + product.totalRevenue, 0);
      },
    },
  };
  </script>
  