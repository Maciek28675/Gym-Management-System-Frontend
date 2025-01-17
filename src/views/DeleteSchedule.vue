<template>
    <div class="bg-gray-50 p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-xl text-gray-900 font-bold mb-4 text-center">Delete Schedule</h2>
      
      <!-- Form -->
      <form class="flex flex-col items-center" @submit.prevent="deleteSchedule">
        <input 
          type="number"
          id="customer_id" 
          v-model="scheduleID" 
          class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
          placeholder="Enter Schedule ID"
        />

        <button
          type="submit" 
          class="flex justify-center rounded-md bg-red-600 px-3 py-1.5 mt-4 
                  text-base font-semibold text-white shadow-sm hover:bg-red-500 
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-red-600"
        >
          Delete
        </button>
      </form>
      <!-- Message (conditionally displayed) -->
      <p v-if="message" :class="messageClass" class="font-semibold flex mt-4 justify-center">{{ message }}</p>
    </div>
</template>

<script>
  import axios from "axios";
  import authHeader from "../services/auth-header";

  export default {
    name: "deleteSchedule",

    data() {
      return {
        scheduleID: '',
        message: '',
        messageClass: '',
      };
    },

    methods: {
      async deleteSchedule() {
        if(!this.scheduleID) {
          this.message = "Please enter a valid schedule ID.";
          this.messageClass = "text-red-500";
          return;
        }

        try {
          console.log("clicked")
          const response = await axios.delete(
            `http://localhost:5000/api/delete_schedule/${this.scheduleID}`,
            { headers: authHeader() }
          );

          if (response.status === 200) {
            this.message = response.data.msg;
            this.messageClass = "text-green-500";
          }
        } catch (error) {

          if (error.response) {
            this.message = error.response.data.msg || "An error occurred.";
            this.messageClass = "text-red-500";
          } else {
            this.message = "Unable to connect to the server.";
            this.messageClass = "text-red-500";
          }
        }
      }
    }
  }

</script>