
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
            <router-link to="/AddEmployee">Add Employee</router-link>
          </button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded shadow">
            <router-link to="/UpdateEmployee">Modify</router-link>
          </button>
          <button class="bg-red-500 text-white px-4 py-2 rounded shadow">Delete</button>
        </div>
      </div>
      <div class="overflow-auto max-h-96" @scroll="onScroll">
        <table class="min-w-full bg-white border rounded-lg shadow">
          <thead>
            <tr class="bg-gray-200 text-left">
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">First Name</th>
              <th class="px-4 py-2">Last Name</th>
              <th class="px-4 py-2">Gym ID</th>
              <th class="px-4 py-2">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in filteredEmployees" :key="employee.id" class="hover:bg-gray-100">
              <td class="px-4 py-2">{{ employee.employee_id }}</td>
              <td class="px-4 py-2">{{ employee.first_name }}</td>
              <td class="px-4 py-2">{{ employee.last_name }}</td>
              <td class="px-4 py-2">{{ employee.gym_id }}</td>
              <td class="px-4 py-2">{{ employee.role }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-center">
        <button
          @click="loadEmployees"
          :disabled="!hasMore"
          class="mt-4 px-4 py-2 bg-orange-600 text-white rounded font-semibold hover:bg-orange-500 active:bg-orange-400"
        >
        Load More
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
    name: "Employees",

    data() {
      return {
        searchQuery: "",
        employees: [],
        numberOfEmployeesToLoad: 5,
        offset: 0,
        hasMore: true,
        message: '',
        messageClass: '',
      };
    },

    computed: {
      filteredEmployees() {
        return this.employees.filter((employee) =>
          Object.values(employee)
            .join(" ")
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      },
    },

    methods: {
      async loadEmployees() {
        try {
          const response = await axios.get(`http://localhost:5000/api/get_all_employees`,
            { headers: authHeader(),
              params: {
                limit: this.numberOfEmployeesToLoad,
                offset: this.offset
              }
            });
            
            if(response.status == 200) {
              this.employees.push(...response.data);
              this.offset += this.numberOfEmployeesToLoad;

              if (response.data.length < this.numberOfEmployeesToLoad) {
                this.hasMore = false;
                this.message = "No more employees to load";
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
  
