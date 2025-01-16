<template>
    <div class="p-6">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Employees</h1>
        <div class="flex items-center space-x-4">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search"
            class="border px-3 py-2 rounded shadow-sm"
          />
          <button class="bg-orange-500 text-white px-4 py-2 rounded shadow">Add Employee</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded shadow">Modify</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded shadow">Delete</button>
        </div>
      </div>
      <div class="overflow-auto max-h-64" @scroll="onScroll">
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
              <td class="px-4 py-2">{{ employee.id }}</td>
              <td class="px-4 py-2">{{ employee.firstName }}</td>
              <td class="px-4 py-2">{{ employee.lastName }}</td>
              <td class="px-4 py-2">{{ employee.gymId }}</td>
              <td class="px-4 py-2">{{ employee.role }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Employees",
    data() {
      return {
        searchQuery: "",
        employees: [
          { id: 1, firstName: "John", lastName: "Doe", gymId: 1, role: "Manager" },
          { id: 2, firstName: "Jane", lastName: "Smith", gymId: 2, role: "Receptionist" },
          { id: 3, firstName: "Alice", lastName: "Johnson", gymId: 3, role: "Coach" },
        ],
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
  };
  </script>
  