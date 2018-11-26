<template lang="pug">
    div(class="displayWorkout")
        h1( v-if="workouts.length > 0") Here is your workout
        br
        ul( class="list-group")
          li( class="list-group-item italic text-lg" v-for="workout in workouts") {{workout.workout}}
        br
        h3 Tips for your workout:
        br
        p To get your heart rate up, complete this as a circuit, meaning go from one movement to the next with little rest. Aim for 4-6 rounds of the circuit. 
        br
        p Decide if you want to use weights for your upper body and lower body moves or just your body weight.
        br
        p For your upper and lower body exercises, complete anywhere from 8-15 repetitions per round.
        br
        p For your core exercise, complete either a certain number (at least 20) or perform the exercise for a certain amount of time (at least 20 seconds).
        br
        p For your cardio exercise, complete either a certain distance or for at least 30 seconds.

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DisplayWorkout',
  computed: mapGetters(['workouts'])
}
</script>

<style scoped>
li {
  list-style: none;
  color: darkgreen;
}

</style>