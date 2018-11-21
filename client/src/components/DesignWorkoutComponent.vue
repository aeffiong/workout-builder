<template lang="pug">
  div(class="about") 
    div(class="flex mb-4")
      div(class="w-full")
        h1 Create a new workout
    div(class="flex mb-4")
      div(class="w-full")
        p Add an exercise into each field
    form(
      :value="newWorkout"
      @change="getWorkouts"
    )
      div(class="flex mb-4")
        div(class="w-full")
          label Enter your workout plan:
          br
          input( 
            class=" input px-2" 
            :value="newWorkout"
            @change="getWorkouts"
            placeholder="bench press, squat, plank, run etc" 
            
            )
          button(class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit" @click="handleSubmit") Submit Workout
          h3 Your workout is:
          span {{ newWorkout }}

    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'designWorkout',
  data() {
    return {
      workout: {
        workout: '',
      }
    }
  },
  computed: mapGetters(['workouts', 'newWorkout']),
  methods: {
       ...mapActions(['getWorkouts', 'addWorkouts', 'clearWorkout']), 
       handleSubmit() {
      // save the data to the db and then go to the view-workout page
      console.log(this.workout)
      this.$store.dispatch('addWorkouts', this.workout)
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

