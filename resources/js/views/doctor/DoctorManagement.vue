<template>
    
      <div class="admin-doctor-management max-w-7xl mx-auto p-6">
        
        
        <header class="text-center mb-6">
          <h1 class="text-4xl font-bold">Doctor Management</h1>
        </header>
        <div class="content bg-white rounded-lg shadow-lg p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-semibold">Doctor List</h2>
            <button @click="openAddDoctorModal" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Add Doctor
            </button>
          </div>
          <table class="w-full border-collapse">
            <thead>
              <tr>
                <th class="border py-2 px-4 text-left">Name</th>
                <th class="border py-2 px-4 text-left">Email</th>
                <th class="border py-2 px-4 text-left">Specialty</th>
                <th class="border py-2 px-4 text-left">Gender</th>
                <th class="border py-2 px-4 text-left">Phone Number</th>
                <th class="border py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="doctor in doctors" :key="doctor.id">
                <td class="border py-2 px-4">{{ doctor.name }}</td>
                <td class="border py-2 px-4">{{ doctor.email }}</td>
                <td class="border py-2 px-4">{{ doctor.specialty }}</td>
                <td class="border py-2 px-4">{{ doctor.gender }}</td>
                <td class="border py-2 px-4">{{ doctor.phone }}</td>
                <td class="border py-2 px-4">
                  <button @click="editDoctor(doctor)" class="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-700">
                    Edit
                  </button>
                  <button @click="deleteDoctor(doctor.id)" class="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
    
          <!-- Add/Edit Doctor Modal -->
          <div v-if="showModal" class="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="modal-content bg-white p-6 rounded-lg relative w-full max-w-md">
              <span class="close absolute top-2 right-2 text-xl cursor-pointer" @click="closeModal">&times;</span>
              <h3 class="text-2xl font-semibold mb-4">{{ isEditMode ? 'Edit Doctor' : 'Add Doctor' }}</h3>
              <form @submit.prevent="isEditMode ? updateDoctor() : createDoctor()">
                <label for="name" class="block mt-2">Name:</label>
                <input v-model="currentDoctor.name" type="text" id="name" required class="w-full p-2 border rounded mt-1"/>
    
                <label for="email" class="block mt-2">Email:</label>
                <input v-model="currentDoctor.email" type="email" id="email" required class="w-full p-2 border rounded mt-1"/>
    
                <label for="specialty" class="block mt-2">Specialty:</label>
                <input v-model="currentDoctor.specialty" type="text" id="specialty" required class="w-full p-2 border rounded mt-1"/>
    
                <label for="gender" class="block mt-2">Gender:</label>
                <select v-model="currentDoctor.gender" id="gender" required class="w-full p-2 border rounded mt-1">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
    
                <label for="phone" class="block mt-2">Phone Number:</label>
                <input v-model="currentDoctor.phone" type="tel" id="phone" required class="w-full p-2 border rounded mt-1"/>
    
                <div class="mt-4 flex justify-end space-x-2">
                  <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
                    {{ isEditMode ? 'Update' : 'Add' }}
                  </button>
                  <button type="button" @click="closeModal" class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
      data() {
        return {
          doctors: [],
          showModal: false,
          isEditMode: false,
          currentDoctor: {
            id: null,
            name: '',
            email: '',
            specialty: '',
            gender: '',
            phone: ''
          }
        };
      },
      methods: {
        fetchDoctors() {
          axios.get('/api/admin/doctors', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then(response => {
            this.doctors = response.data;
          })
          .catch(error => {
            console.error('Error fetching doctors:', error);
          });
        },
        openAddDoctorModal() {
          this.isEditMode = false;
          this.currentDoctor = { id: null, name: '', email: '', specialty: '', gender: '', phone: '' };
          this.showModal = true;
        },
        editDoctor(doctor) {
          this.isEditMode = true;
          this.currentDoctor = { ...doctor };
          this.showModal = true;
        },
        createDoctor() {
          axios.post('/api/admin/doctors', this.currentDoctor, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then(() => {
            this.fetchDoctors();
            this.closeModal();
          })
          .catch(error => {
            console.error('Error creating doctor:', error);
          });
        },
        updateDoctor() {
          axios.put(`/api/admin/doctors/${this.currentDoctor.id}`, this.currentDoctor, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then(() => {
            this.fetchDoctors();
            this.closeModal();
          })
          .catch(error => {
            console.error('Error updating doctor:', error);
          });
        },
        deleteDoctor(doctorId) {
          axios.delete(`/api/admin/doctors/${doctorId}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then(() => {
            this.fetchDoctors();
          })
          .catch(error => {
            console.error('Error deleting doctor:', error);
          });
        },
        closeModal() {
          this.showModal = false;
        },
        logout() {
          // Handle logout action
        }
      },
      created() {
        this.fetchDoctors();
      }
    };
    </script>
    
    <style scoped>
    /* Tailwind CSS will handle most of the styling. */
    </style>
    