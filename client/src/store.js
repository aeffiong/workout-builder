import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workouts: [],
    // newWorkout: ''

  },
  mutations: {
    ADDWORKOUT: (state, payload) => {
      const workout = {
        workout: payload
      }
      state.workouts.push(workout)
    },
    // CLEARWORKOUT (state) {
    //   state.newWorkout = ''
    // }
  },
  actions: {
    // getWorkouts ({commit}, workout) {
    //   commit("GETWORKOUT", workout)
    // },
    addWorkouts: ({ commit }, payload) => {
      commit("ADDWORKOUT", payload)
    },
    // clearWorkout ({commit}) {
    //   commit('CLEARWORKOUT')
    // }
  },
  getters: {
    workouts: state => state.workouts
  },
})


