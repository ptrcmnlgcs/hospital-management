<template>
    <div>
      <div>
        <h1 class="text-2xl font-bold mb-4">Appointments</h1>
        <ul>
          <li v-for="appointment in appointments" :key="appointment.id" class="mb-2">
            {{ appointment.details }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        appointments: [],
        showNavbar: false
      };
    },
    methods: {
      fetchAppointments() {
        fetch('/api/doctor/appointment', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then(response => response.json())
        .then(data => {
          this.appointments = data;
        })
        .catch(error => {
          console.error('Error fetching appointments:', error);
        });
      },
      toggleNavbar() {
        this.showNavbar = !this.showNavbar;
      }
    },
    created() {
      this.fetchAppointments();
    }
  };
  </script>
  
  <style>
  /* Tailwind CSS will handle the styles */
  </style>
  