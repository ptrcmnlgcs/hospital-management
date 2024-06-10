<template>
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form @submit.prevent="login">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                    <input v-model="credentials.email" type="email" id="email" name="email"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Email" required />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                    <input v-model="credentials.password" type="password" id="password" name="password"
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Password" required />
                </div>
                <div class="flex items-center justify-center">
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                </div>
            </form>
            <p class="mt-4 text-center text-gray-600">
                Don't have an account yet?
                <router-link to="/" class="text-blue-500 hover:text-blue-700">Register here</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            credentials: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        login() {
            this.$store.dispatch('login', { credentials: this.credentials, toast: this.$toast })
                .then(() => {
                    this.credentials.email = this.credentials.password = '';
                    this.$router.push('/dashboard');
                });
        }
    }
}
</script>
