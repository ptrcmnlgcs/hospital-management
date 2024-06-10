<template>
    <div>
      <!-- Include the Dashboard component -->
      <Dashboard :userLoggedIn="userLoggedIn" />
  
      <!-- Doctor Page Content -->
      <div class="flex-1 p-4">
        <h1>Doctor Page</h1>
        <!-- Add your doctor-related content here -->
      </div>
    </div>
  </template>
  
  <script>
  // Import the Dashboard component
  import DashboardPage from '@/components/DashboardPage.vue';
  
  export default {
    name: 'DoctorPage',
    components: {
      DashboardPage, // Register the Dashboard component
    },
    computed: {
      userLoggedIn() {
        return this.$store.getters.isLoggedIn;
      }
    },
    methods: {
      async logout() {
        try {
          await this.$store.dispatch('logout', this.$toast);
          this.$router.push('/login');
        } catch (error) {
          console.error('Logout error:', error.error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  