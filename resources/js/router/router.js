import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '../views/patient/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import Dashboard from '../views/DashboardPage.vue';
import store from '../vuex/store';

const routes = [
    { path: '/', name: 'registerPatient', component: RegisterPage },
    { path: '/login', name: 'loginPage', component: LoginPage },
    { path: '/dashboard', name: 'dashboardPage', component: Dashboard, meta: { requiresAuth: true } }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters.isLoggedIn;
    const token = store.getters.token;

    console.log('Current route:', to.name);
    console.log('Is authenticated:', isAuthenticated);
    console.log('token:', token);

    if (to.meta.requiresAuth && !isAuthenticated) {
        console.log('Redirecting to login page');
        next({ name: 'loginPage' });
    } else if (isAuthenticated && (to.name === 'registerPatient' || to.name === 'loginPage')) {
        console.log('Redirecting to dashboard');
        next({ name: 'dashboardPage' });
    } else {
        console.log('Allowed to proceed');
        next();
    }
});

export default router;
