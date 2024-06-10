<template>
    <div class="container mt-3 mx-auto"> <!-- Added mx-auto class for center alignment -->
      <div class="d-flex justify-content-between mb-3">
        <h2>Patient List</h2>
        <router-link to="/add-patient">
          <button class="btn btn-primary">Add New Patient</button>
        </router-link>
      </div>
      <table class="table table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th width="15%">Name</th>
            <th width="15%">Email</th>
            <th width="15%">Phone</th>
            <th width="15%">Date of Birth</th>
            <th width="10%">Gender</th>
            <th width="20%">Doctor Name</th>
            <th width="10%">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="patient in patients" :key="patient.id">
            <td>{{ patient.name }}</td>
            <td>{{ patient.email }}</td>
            <td>{{ patient.phone }}</td>
            <td>{{ patient.dob }}</td>
            <td>{{ patient.gender }}</td>
            <td>{{ patient.doctor_name }}</td>
            <td class="d-flex justify-content-between align-items-center"> <!-- Added d-flex class -->
              <div>
                <button class="btn btn-success btn-sm rounded-pill">Edit</button>
              </div>
              <div>
                <button class="btn btn-danger btn-sm rounded-pill">Delete</button>
              </div>
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
        patients: [
          { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', dob: '1990-01-01', gender: 'Male', doctor_name: 'Dr. Smith' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', dob: '1995-05-15', gender: 'Female', doctor_name: 'Dr. Brown' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  
  .table {
    margin-top: 10px;
  }
  
  .thead-dark th {
    background-color: #343a40;
    color: white;
  }
  
  h2 {
    font-size: 20px;
    font-weight: bold;
  }
  
  .btn {
    margin-right: 0.5rem;
    padding: 0.5rem 1rem;
  }
  
  .btn-sm {
    padding: 0.25rem 0.5rem;
  }
  
  .mt-3 {
    margin-top: 1rem;
  }
  
  .mb-3 {
    margin-bottom: 0.5rem;
  }
  
  /* Style for the Add New Patient button */
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  /* Style for the Edit button */
  .btn-success {
    background-color: #28a745;
    border-color: #28a745;
  }
  
  /* Style for the Delete button */
  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  </style>