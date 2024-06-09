import axiosInstance from '../../axios';

const state = {
    user: null,
    token: null,
};

const getters = {
    isLoggedIn: state => state.user != null,
    token: state => state.token,
};

const actions = {
    register: ({ }, { formData, toast }) => {
        return axiosInstance.post('register', formData)
            .then(response => {
                toast.success(response.data.message);
                return response;
            })
            .catch(error => {
                toast.error(error.response?.data?.errors || 'Registration failed');
                throw error;
            });
    },
    login: ({ commit }, { credentials, toast }) => {
        return axiosInstance.post('login', credentials)
            .then(response => {
                const data = response.data;
                commit('authSuccess', { user: data.user, token: data.token });
                toast.success(data.message);
                return response;
            })
            .catch(error => {
                toast.error(error.response?.data?.message || 'Login failed');
                throw error;
            });
    },
    logout: ({ commit }, toast) => {
        return axiosInstance.get('logout')
            .then(response => {
                delete axiosInstance.defaults.headers.common['Authorization'];
                commit('logout');
                toast.success(response.data.message);
                return response;
            })
            .catch(error => {
                toast.error(error.response?.data?.message || 'Logout failed');
                throw error;
            });
    }
};

const mutations = {
    authSuccess: (state, { user, token }) => {
        state.user = user;
        state.token = token;
    },
    logout: (state) => {
        state.user = null;
        state.token = null;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
