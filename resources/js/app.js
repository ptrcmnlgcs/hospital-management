import { createApp } from 'vue';
import axiosInstance from './axios.js';
import router from './router/router.js';
import store from './vuex/store.js';
import Navbar from './components/NavBar.vue';
import Toast, { useToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import Swal from 'sweetalert2';

const app = createApp();

app.config.globalProperties.$swal = Swal;
app.config.globalProperties.$toast = useToast();
app.config.globalProperties.$axios = axiosInstance;
app.use(Toast, {
    position: 'bottom-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false,
    transition: 'Vue-Toastification__bounce',
    newestOnTop: true,
})
    .use(router)
    .use(store)
    .component('Navbar', Navbar)
    .mount("#app");
