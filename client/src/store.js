import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workouts: [
      {upper_body: "push ups", lower_body: "squats", core: "planks", cardio: "jumping jacks"},
      {upper_body: "bench", lower_body: "lunges", core: "v-ups", cardio: "high knees"},
    ]

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
    GETWORKOUTS: (context, payload) => {
      context.commit("SETWORKOUTS", payload)
    },
    SAVEWORKOUTS: (context, payload) => {
      context.commit("ADDWORKOUTS", payload)
    }
  }
})


