import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workouts: []

  },
  getters: {
    WORKOUTS: state => {
      return state.workouts
    }
  },
  mutations: {
    SETWORKOUTS: (state, payload) => {
      state.workouts = payload
    },
    ADDWORKOUTS: (state, payload) => {
      state.workouts.push(payload)
    }
  },
  actions: {
    GETWORKOUTS: ({commit}, payload) => {
      commit("SETWORKOUTS", payload)
    },
    SAVEWORKOUTS: ({commit }, payload) => {
      commit("ADDWORKOUTS", payload)
    }
  }
})


