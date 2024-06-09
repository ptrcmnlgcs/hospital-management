<template>
    <nav class="bg-white p-4 shadow-md">
        <div class="container mx-auto flex justify-end items-center">
            <div>
                <router-link v-if="!userLoggedIn" to="/"
                    class="text-black mx-2 font-semibold transition duration-300 hover:text-red-500">Register</router-link>
                <router-link v-if="!userLoggedIn" to="/login"
                    class="text-black mx-2 font-semibold transition duration-300 hover:text-red-500">Login</router-link>
                <button v-else @click="logout"
                    class="text-black mx-2 font-semibold transition duration-300 hover:text-red-500">Logout</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    computed: {
        userLoggedIn() {
            return this.$store.getters.isLoggedIn;
        }
    },
    methods: {
        async logout() {
            try {
                this.$store.dispatch('logout', this.$toast)
                    .then(() => {
                        this.$router.push('/login');
                    });
            } catch (error) {
                console.error('Logout error:', error.error);
            }
        }
    }
};
</script>
