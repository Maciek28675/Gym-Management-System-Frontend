import AuthService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const auth = {
    namespaced: true,
    state: initialState,

    actions: {
        login({commit}, user) {
            return AuthService.login(user).then(
                user => {
                    commit('LoginSuccess', user);
                    return Promise.resolve(user);
                },
                error => {
                    commit('LoginFaliure');
                    return Promise.reject(error);
                }
            );
        },

        logout({commit}) {
            AuthService.logout();
            commit('logout');
        }
    },

    mutations: {
        LoginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        LoginFaliure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
    }
}