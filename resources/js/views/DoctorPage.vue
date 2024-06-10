<template>
    <div class="container mt-5 align-right">
      <div class="d-flex justify-content-between mb-3">
        <h2>Doctor List</h2>
        <router-link to="/add-doctor">
          <button class="btn btn-success">Add New Doctor</button>
        </router-link>
      </div>
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th width="15%">Name</th>
            <th width="10%">Gender</th>
            <th width="20%">Specialist</th>
            <th width="10%">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="doctor in doctors" :key="doctor.id">
            <td>{{ doctor.name }}</td>
            <td>{{ doctor.gender }}</td>
            <td>{{ doctor.specialist }}</td>
            <td>
              <router-link :to="{ name: 'EditDoctor', params: { id: doctor.id } }">
                <button class="btn btn-success btn-sm mr-2">Edit</button>
              </router-link>
              <button @click="confirmDelete(doctor.id)" class="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        doctors: [],
      };
    },
    methods: {
      // Fetch doctors method will be added here but omitted for design purposes
      // confirmDelete and deleteDoctor methods will be added but omitted for design purposes
    },
    mounted() {
      // fetchDoctors method call will be added here but omitted for design purposes
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1000px;
  }
  
  .table {
    margin-top: 20px;
  }
  
  .thead-dark th {
    background-color: #343a40;
    color: white;
  }
  
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  
  .btn {
    margin-right: 0.5rem;
  }
  
  .btn-sm {
    padding: 0.25rem 0.5rem;
  }
  
  .mt-5 {
    margin-top: 3rem;
  }
  
  .mb-3 {
    margin-bottom: 1rem;
  }
  
  /* Custom style for the Add New Doctor button */
  .btn-success {
    background-color: #28a745; /* Green color */
    border-color: #28a745; /* Green color */
    border-width: 5px; /* Increase border thickness */
  }
  
  /* Align the container to the right */
  .align-right {
    margin-left: auto;
  }
  </style>
  