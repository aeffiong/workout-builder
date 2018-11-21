<template lang="pug">
    div(class="displayWorkout")
        h1( v-if="workouts.length > 0") Here is your workout
          ul( class="list-group")
            li( class="list-group-item" v-for="workout in workouts") {{workout}}
        h3 Tips for your workout.
            p To get your heart rate up, complete this as a circuit, meaning go from one more to the next with little rest. Aim for 4-6 rounds of the circuit. 
            p Decide if you want to use weights for your upper body and lower body moves or just your body weight.
            p For your upper and lower body exercises, complete anywhere from 8-15 repetitions per round.
            p For your core and cardio exercises, complete either a certain number (at least 20) or perform the exercise for a certain amount of time (at least 20 seconds).

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DisplayWorkout',
  computed: mapGetters(['workouts', 'newWorkout'])
}
</script>

<style>

</style>