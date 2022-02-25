import { createStore } from 'vuex';
import { auth, usersCollection } from '@/includes/firebase';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  getters: {
  },
  actions: {
    async register({ commit }, payload) {
      // Create a new user in firebase (adds only email and password)
      const userCred = await auth.createUserWithEmailAndPassword(
        payload.email, payload.password,
      );

      // Store all the user data with exception of the password using the same uid as before
      await usersCollection.doc(userCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
      });

      // Set the display name as the user name
      await userCred.user.updateProfile({
        displayName: payload.name,
      });

      // Toggle the authentication state to true
      commit('toggleAuth');
    },
    async login({ commit }, payload) {
      // Send the authentication request
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      // Toggle the authentication state to true
      commit('toggleAuth');
    },
    init_login({ commit }) {
      // Retrieve the current authentication status from firebase
      const user = auth.currentUser;

      // Check if the user is logged in based on the value retrieved
      if (user) {
        commit('toggleAuth');
      }
    },
  },
});
