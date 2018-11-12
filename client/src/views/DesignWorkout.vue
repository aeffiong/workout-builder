<template lang="pug">
  div(class="about") 
    h1 Create a new workout
    p Add an exercise into each field

    label Upper Body
      input(placeholder="bench press, shoulder press, row, etc")
    label Lower Body
      input(placeholder="squat, deadlift, lunges, etc")
    label Core
      input(placeholder="plank, deadbugs, v-up, etc")
    label Cardio
      input(placeholder="jumping jacks, tuck jumps, mountain climbers, etc")
    
    button(type="submit" @click="handleSubmit") Submit Workout

    
</template>

<script>
export default {
  name: 'designWorkout',
  methods: {
    handleSubmit() {
      // save the data to the db and then go to the view-workout page
      console.log("save the data")
      this.$router.push('view-workout')
    }
  }
}
</script>

