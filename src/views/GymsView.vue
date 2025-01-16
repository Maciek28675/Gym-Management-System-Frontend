<template>
    <div class="p-6">
      <div class="flex justify-between items-center mb-4">
        <!-- Nazwa tabeli po lewej stronie -->
        <h1 class="text-2xl font-bold">Gyms</h1>
        <!-- Przyciski i pasek wyszukiwania po prawej stronie -->
        <div class="flex items-center space-x-4">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search"
            class="border px-3 py-2 rounded shadow-sm"
          />
          <button class="bg-orange-500 text-white px-4 py-2 rounded shadow">Add Gym</button>
          <button class="bg-blue-500 text-white px-4 py-2 rounded shadow">Modify</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded shadow">Delete</button>
        </div>
      </div>
      <table class="min-w-full bg-white border rounded-lg shadow">
        <thead>
          <tr class="bg-gray-200 text-left">
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="gym in filteredGyms"
            :key="gym.id"
            class="hover:bg-gray-100"
          >
            <td class="px-4 py-2">{{ gym.id }}</td>
            <td class="px-4 py-2">{{ gym.name }}</td>
            <td class="px-4 py-2">{{ gym.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "Gyms",
    data() {
      return {
        searchQuery: "",
        gyms: [
          {
            id: 1,
            name: "Sky Tower",
            address: "Powstańców Śląskich 95, 53-332 Wrocław",
          },
          // Dodaj więcej danych, jeśli potrzebne
        ],
      };
    },
    computed: {
      filteredGyms() {
        return this.gyms.filter((gym) =>
          Object.values(gym)
            .join(" ")
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
        );
      },
    },
  };
  </script>
  