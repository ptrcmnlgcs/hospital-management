import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '../views/patient/RegisterPage.vue';
import LoginPage from '../views/LoginPage.vue';
import Dashboard from '../views/DashboardPage.vue';
import DoctorPage from '../views/DoctorPage.vue'; // Import DoctorPage
import PatientPage from '../views/PatientPage.vue'; // Import PatientPage
<<<<<<< HEAD
import DoctorProfile from '../views/doctor/DoctorProfile.vue';
import DoctorManagement from '../views/doctor/DoctorManagement.vue';
import DoctorAppointment from '../views/doctor/DoctorAppointment.vue';
=======
import AppointmentPage from '../views/admin/AppointmentPage.vue';

>>>>>>> 41996f30ecedf4c4c82c2868f65ccf09807c34fc
import store from '../vuex/store';

const routes = [
    { path: '/', name: 'registerPatient', component: RegisterPage },
    { path: '/login', name: 'loginPage', component: LoginPage },
    { path: '/dashboard', name: 'dashboardPage', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/doctor', name: 'doctorPage', component: DoctorPage, meta: { requiresAuth: true } }, // Add DoctorPage route
    { path: '/patient', name: 'patientPage', component: PatientPage, meta: { requiresAuth: true } }, // Add PatientPage route
<<<<<<< HEAD
    { path: '/doctor-profile', name: 'doctorProfile', component: DoctorProfile, meta: { requiresAuth: true } },
    { path: '/doctor-management', name: 'doctorManagement', component: DoctorManagement, meta: { requiresAuth: true } },
    { path: '/doctor-appointment', name: 'doctorAppointment', component: DoctorAppointment, meta: { requiresAuth: true } },
=======

    { path: '/admin-appointment', name: 'AppointmentPage', component: AppointmentPage, meta: { requiresAuth: true } },
>>>>>>> 41996f30ecedf4c4c82c2868f65ccf09807c34fc
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
