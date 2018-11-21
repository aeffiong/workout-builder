import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workouts: ['fdafada', 'adfaa', 'adfaa'],
    newWorkout: ''

  },
  mutations: {
    GETWORKOUT (state, workouts) {
      state.newWorkout = workouts
    },
    ADDWORKOUT (state) {
      state.workouts.push(state.newWorkout)
    },
    CLEARWORKOUT (state) {
      state.newWorkout = ''
    }
  },
  actions: {
    getWorkouts ({commit}, workout) {
      commit("GETWORKOUT", workout)
    },
    addWorkouts ({commit }) {
      commit("ADDWORKOUT")
    },
    clearWorkout ({commit}) {
      commit('CLEARWORKOUT')
    }
  },
  getters: {
    newWorkout: state => state.newWorkout,
    workouts: state => state.workouts
  },
})


