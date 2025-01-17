
<template>
    <div class="p-6">
      <div class="flex justify-between items-center mb-4">
        <div class="flex items-center space-x-4">
          <div>
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search"
              class="border px-3 py-2 rounded shadow-sm"
            />
          </div>
          <button class="bg-red-500 text-white px-4 py-2 rounded shadow">
            <router-link to="/SellProduct">Sell Product</router-link>
          </button>
          <button class="bg-orange-600 text-white font-semibold px-4 py-2 rounded shadow">
            <router-link to="/AddProduct">Add Product</router-link>
          </button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded shadow">  
            <router-link to="/UpdateProduct">Modify</router-link>
          </button>
          <button class="bg-red-500 text-white px-4 py-2 rounded shadow">
            <router-link to="/DeleteProduct">Delete</router-link>
          </button>
        </div>
      </div>
      <div class="overflow-auto max-h-96" @scroll="onScroll">
        <table class="min-w-full bg-white border rounded-lg shadow">
          <thead>
            <tr class="bg-gray-200 text-left">
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Gym ID</th>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Quantity In Stock</th>
              <th class="px-4 py-2">Quantity Sold</th>
              <th class="px-4 py-2">Price</th>
              <th class="px-4 py-2">TotalRevenue</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in filteredProducts" :key="product.id" class="hover:bg-gray-100">
              <td class="px-4 py-2">{{ product.product_id }}</td> 
              <td class="px-4 py-2">{{ product.gym_id }}</td>
              <td class="px-4 py-2">{{ product.name }}</td> 
              <td class="px-4 py-2">{{ product.last_name }}</td>
              <td class="px-4 py-2">{{ product.quantity_in_stock }}</td>
              <td class="px-4 py-2">{{ product.quantity_sold }}</td>   
              <td class="px-4 py-2">{{ product.price }}</td>
              <td class="px-4 py-2">{{ product.total_revenue }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-center">
        <button
          @click="loadProducts"
          :disabled="!hasMore"
          class="mt-4 px-4 py-2 bg-orange-600 text-white rounded font-semibold hover:bg-orange-500 active:bg-orange-400"
        >
        Load All
        </button>
      </div>
      <div v-if="message" :class="messageClass" class="flex items-center justify-center text-center font-semibold mt-4 rounded-lg  h-10">
        {{ message }}
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import authHeader from "../services/auth-header";
  
  export default {
    name: "Products",

    data() {
      return {
        searchQuery: "",
        products: [],
        numberOfProductsToLoad: 100,
        offset: 0,
        hasMore: true,
        message: '',
        messageClass: '',
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
    },

    methods: {
      async loadProducts() {
        try {
          const response = await axios.get(`http://localhost:5000/api/get_all_products`,
            { headers: authHeader(),
              params: {
                limit: this.numberOfProductsToLoad,
                offset: this.offset
              }
            });
            
            if(response.status == 200) {
              this.products.push(...response.data);
              this.offset += this.numberOfProductsToLoad;

              if (response.data.length < this.numberOfProductsToLoad) {
                this.hasMore = false;
                this.message = "No more products to load";
                this.messageClass = "bg-blue-100 text-blue-800";
              }
            }
        } catch (error) {
          if (error.response.status == 403){
            this.$router.push("/401");
          }
          if (error.response) {
            this.message = error.response.data.msg || "An error occurred.";
            this.messageClass = "bg-red-100 text-red-800";
          } else {
            this.message = "Unable to connect to the server.";
            this.messageClass = "bg-red-100 text-red-800";
          }
        }
      }
    }
  };
  </script>
  
