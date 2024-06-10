<template>
    <div class="flex">
      <div class="w-1/4">
        <SidePanel />
      </div>
      <div class="w-3/4 container mx-auto mt-10">
        <h1 class="text-2xl font-bold mb-6">Appointment List</h1>
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Name</th>
              <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Date & Time</th>
              <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Doctor</th>
              <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Mobile No.</th>
              <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Gender</th>
              <th class="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-600">Appointment Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="appointment in appointments" :key="appointment.id" class="hover:bg-gray-100">
              <td class="py-2 px-4 border-b border-gray-200"></td>
              <td class="py-2 px-4 border-b border-gray-200"></td>
              <td class="py-2 px-4 border-b border-gray-200"></td>
              <td class="py-2 px-4 border-b border-gray-200"></td>
              <td class="py-2 px-4 border-b border-gray-200"></td>
              <td class="py-2 px-4 border-b border-gray-200"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

<style scoped>
.container {
  max-width: 800px;
}
</style>