<template lang="pug">
  div(class="about") 
    div(class="flex mb-4")
      div(class="w-full")
        h1 Create a new workout
    div(class="flex mb-4")
      div(class="w-full")
        p Add an exercise into each field
    div(class="flex mb-4")
      div(class="w-full")
        label Upper Body:
        br
        input(class=" input px-2" placeholder="bench press, shoulder press, row, etc")
    div(class="flex mb-4")
      div(class="w-full")
        label Lower Body:
        br
        input(class=" input px-2" placeholder="squat, deadlift, lunges, etc")
    div(class="flex mb-4")
      div(class="w-full")
        label Core:
        br
        input(class=" input px-2" placeholder="plank, deadbugs, v-up, etc")
    div(class="flex mb-4")
      div(class="w-full")
        label Cardio:
        br
        input(class=" input px-2" placeholder="jumping jacks, tuck jumps, mountain climbers, etc")
    div(class="flex mb-4")
      div(class="w-full")
        button(class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit" @click="handleSubmit") Submit Workout

    
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

<style scoped>
  .input {
    border: 2px;
    border-color: gray;
    border-style: solid;
  }
</style>


