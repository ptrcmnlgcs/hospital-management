<template>
    <SidePanel />
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
