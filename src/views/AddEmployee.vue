<template>
    <form class="max-w-lg mx-auto" @submit.prevent="register">
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" v-model="first_name" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input type="text" v-model="last_name" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <input type="password" v-model="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
        <div class="relative z-0 w-full mb-5 group">
            <input type="number" v-model="gym_id" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer" placeholder=" " required />
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gym ID</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Role</label>
            <select id="role" v-model="role" >
                <option value="manager">manager</option>
                <option value="receptionist">receptionist</option>
                <option value="coach">coach</option>
            </select>
        </div>
        </div>
        <button type="submit" class="text-white bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Submit</button>
        <div v-if="message" :class="messageClass" class="flex items-center justify-center text-center font-semibold mt-4 rounded-lg  h-10 w-auto">
            {{ message }}
        </div>
    </form>
</template>

<script>
    import axios from "axios";
    import authHeader from "../services/auth-header";

    export default {
        data() {
            return {
                first_name: "",
                last_name: "",
                password: "",
                gym_id: 0,
                role: "",
                message: "",
                messageClass: "",
            }
        },

        methods: {
            async register() {
                try {
                    const data = {
                        first_name: this.first_name,
                        last_name: this.last_name,
                        password: this.password,
                        gym_id: this.gym_id,
                        role: this.role,
                    }

                    const response = await axios.post("http://localhost:5000/api/register", data, { headers: authHeader() });
                    
                    if(response.status == 201) {
                        this.message = response.data.msg
                        this.messageClass = "bg-green-100 text-green-800"
                        this.resetForm();
                    }

                } catch(error) {
                    if (error.response.status == 403){
                        this.$router.push("/401");
                    }
                    if(error.response){
                        this.message = error.response.data.msg;
                        this.messageClass = "bg-red-100 text-red-800";
                    }
                }
            },
            resetForm() {
                this.first_name = "";
                this.last_name = "";
                this.password = "";
                this.gym_id = "";
                this.role = "";
            },
        }
    }
</script>