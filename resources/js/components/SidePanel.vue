<template>
    <div class="flex h-screen">
        <nav class="bg-black text-white w-64 flex flex-col justify-center items-center">
            <ul class="space-y-4 text-center">
                <li>
                    <router-link to="/profile" class="block text-xl text-white transition duration-300 hover:text-red-500">Profile</router-link>
                </li>
                <li>
                    <router-link to="/doctor" class="block text-xl text-white transition duration-300 hover:text-red-500">Doctor Management</router-link>
                </li>
                <li>
                    <router-link to="/patient" class="block text-xl text-white transition duration-300 hover:text-red-500">Patient Management</router-link>
                </li>
                <li>
                    <router-link to="/appointment" class="block text-xl text-white transition duration-300 hover:text-red-500">Appointment</router-link>
                </li>
                <li>
                    <router-link to="/medical-records" class="block text-xl text-white transition duration-300 hover:text-red-500">Medical Records</router-link>
                </li>
                <li v-if="userLoggedIn">
                    <button @click="logout" class="block text-xl text-white transition duration-300 hover:text-red-500 w-full">Logout</button>
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
    name: 'SidePanel',
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
/* Adjust the font size */
.text-xl {
    font-size: 1.25rem; /* Adjust as needed */
}

/* Center the text in the button */
nav button {
    text-align: center;
}

/* Additional styling if needed */
</style>
