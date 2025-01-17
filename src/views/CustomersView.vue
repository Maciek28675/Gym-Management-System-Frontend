
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
          <button class="bg-orange-600 text-white font-semibold px-4 py-2 rounded shadow">
            <router-link to="/AddCustomer">Add Customer</router-link>
          </button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded shadow">  
            <router-link to="/UpdateCustomer">Modify</router-link>
          </button>
          <button class="bg-red-500 text-white px-4 py-2 rounded shadow">
            <router-link to="/DeleteCustomer">Delete</router-link>
          </button>
        </div>
      </div>
      <div class="overflow-auto max-h-96" @scroll="onScroll">
        <table class="min-w-full bg-white border rounded-lg shadow">
          <thead>
            <tr class="bg-gray-200 text-left">
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Subscription ID</th>
              <th class="px-4 py-2">First Name</th>
              <th class="px-4 py-2">Last Name</th>
              <th class="px-4 py-2">Sub Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="customer in filteredCustomers" :key="customer.id" class="hover:bg-gray-100">
              <td class="px-4 py-2">{{ customer.customer_id }}</td> 
              <td class="px-4 py-2">{{ customer.subscription_id }}</td>
              <td class="px-4 py-2">{{ customer.first_name }}</td> 
              <td class="px-4 py-2">{{ customer.last_name }}</td>
              <td class="px-4 py-2">{{ customer.sub_purchase_date }}</td>   
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-center">
        <button
          @click="loadCustomers"
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
    name: "Customers",

    data() {
      return {
        searchQuery: "",
        customers: [],
        numberOfCustomersToLoad: 1000,
        offset: 0,
        hasMore: true,
        message: '',
        messageClass: '',
      };
    },

    computed: {
      filteredCustomers() {
        return this.customers.filter((customer) =>
          Object.values(customer)
            .join(" ")
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      },
    },

    methods: {
      async loadCustomers() {
        try {
          const response = await axios.get(`http://localhost:5000/api/get_all_customers`,
            { headers: authHeader(),
              params: {
                limit: this.numberOfCustomersToLoad,
                offset: this.offset
              }
            });
            
            if(response.status == 200) {
              this.customers.push(...response.data);
              this.offset += this.numberOfCustomersToLoad;

              if (response.data.length < this.numberOfCustomersToLoad) {
                this.hasMore = false;
                this.message = "No more customers to load";
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
  
