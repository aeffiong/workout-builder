<template lang="pug">
  div(class="about") 
    div(class="flex mb-4")
      div(class="w-full")
        h1 Create a new workout
    div(class="flex mb-4")
      div(class="w-full")
        p Add an exercise for the following body parts, separated by a comma: upper body, lower body, core, cardio.
    form(
      @submit.prevent='handleSubmit'
    )
      div(class="flex mb-4")
        div(class="w-full")
          label Enter your workout plan:
          br
          input( 
            class="w-3/4 input px-2 mb-4" 
            type="text"
            v-model="workout"
            placeholder="bench press, squat, plank, run etc" 
            )
          br
          button(class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded" type="submit") Submit Workout
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'designWorkout',
  data() {
    return {
      workout: '',
    }
  },
  computed: mapGetters(['workouts']),
  methods: {
       ...mapActions([ 'addWorkouts' ]), 
       handleSubmit() {
      // save the data to the db and then go to the view-workout page
      console.log(this.workout)
      this.addWorkouts(this.workout)
      this.$router.push('view-workout')
    }
  }     
}

</script>

<style scoped>
  .input {
    border: 2px;
    border-color: gray;
    border-style: solid;
  }
</style>

