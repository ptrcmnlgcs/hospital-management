<template>
    <div>
        <div class="container mx-auto flex justify-end items-center">
            <div>
                <button v-if="userLoggedIn" @click="logout"
                    class="text-black mx-2 font-semibold transition duration-300 hover:text-red-500">Logout</button>
            </div>
        </div>
    </div>
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
/* Add any scoped styles if needed */
</style>
