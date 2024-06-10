<template>
    <div class="flex h-screen">
        <nav class="bg-black text-white w-64 flex flex-col justify-center items-center">
            <ul class="space-y-4 text-center">
                <li>
                    <router-link to="/doctor" class="block text-xl text-white transition duration-300 hover:text-red-500">Doctor</router-link>
                </li>
                <li>
                    <router-link to="/patient" class="block text-xl text-white transition duration-300 hover:text-red-500">Patient</router-link>
                </li>
                <li>
                    <router-link to="/appointment" class="block text-xl text-white transition duration-300 hover:text-red-500">Appointment</router-link>
                </li>
                <li>
                    <router-link to="/medical-records" class="block text-xl text-white transition duration-300 hover:text-red-500">Medical Records</router-link>
                </li>
                <li v-if="userLoggedIn">
                    <button @click="logout" class="block text-xl text-white transition duration-300 hover:text-red-500 w-full text-left">Logout</button>
                </li>
            </ul>
        </nav>
        <div class="flex-1 p-4">
            <!-- Your main content will be rendered here -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashboardPage',
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

<style>
/* Adjust the font size and alignment */
.text-xl {
    font-size: 1.25rem; /* Adjust as needed */
}

/* Additional styling if needed */
</style>
