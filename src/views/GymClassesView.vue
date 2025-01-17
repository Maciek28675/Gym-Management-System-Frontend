
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
            <router-link to="/AddGymClass">Add Gym Class</router-link>
          </button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded shadow">
            <router-link to="/UpdateGymClass">Modify</router-link>
          </button>
          <button class="bg-red-500 text-white px-4 py-2 rounded shadow">
            <router-link to="/DeleteGymClass">Delete</router-link>
          </button>
        </div>
      </div>
      <div class="overflow-auto max-h-96" @scroll="onScroll">
        <table class="min-w-full bg-white border rounded-lg shadow">
          <thead>
            <tr class="bg-gray-200 text-left">
              <th class="px-4 py-2">ID</th>
              <th class="px-4 py-2">Employee ID</th>
              <th class="px-4 py-2">Gym ID</th>
              <th class="px-4 py-2">Name</th>
              <th class="px-4 py-2">Max People</th>
              <th class="px-4 py-2">Time</th>
              <th class="px-4 py-2">Day OTW</th>
              <th class="px-4 py-2">Signed People</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="gymclass in filteredGymClasses" :key="gymclass.id" class="hover:bg-gray-100">
              <td class="px-4 py-2">{{ gymclass.gymclass_id }}</td>
              <td class="px-4 py-2">{{ gymclass.employee_id }}</td>
              <td class="px-4 py-2">{{ gymclass.gym_id }}</td>
              <td class="px-4 py-2">{{ gymclass.name }}</td>
              <td class="px-4 py-2">{{ gymclass.max_people }}</td>
              <td class="px-4 py-2">{{ gymclass.time }}</td>
              <td class="px-4 py-2">{{ gymclass.day_otw }}</td>
              <td class="px-4 py-2">{{ gymclass.signed_people }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-center">
        <button
          @click="loadGymClasses"
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
    name: "GymClasses",

    data() {
      return {
        searchQuery: "",
        gymclasses: [],
        numberOfGymClassesToLoad: 5,
        offset: 0,
        hasMore: true,
        message: '',
        messageClass: '',
      };
    },

    computed: {
      filteredGymClasses() {
        return this.gymclasses.filter((gymclass) =>
          Object.values(gymclass)
            .join(" ")
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      },
    },

    methods: {
      async loadGymClasses() {
        try {
          const response = await axios.get(`http://localhost:5000/api/get_all_gymclasses`,
            { headers: authHeader(),
              params: {
                limit: this.numberOfGymClassesToLoad,
                offset: this.offset
              }
            });
            
            if(response.status == 200) {
              this.gymclasses.push(...response.data);
              this.offset += this.numberOfGymClassesToLoad;

              if (response.data.length < this.numberOfGymClassesToLoad) {
                this.hasMore = false;
                this.message = "No more gym classes to load";
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
  
