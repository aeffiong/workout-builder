<template lang="pug">
  div(class="workouts")
    div(v-for="workout in workouts")
      <p>
        <span>{{ workout.upper_body }}</span><br />
        <span>{{ workout.lower_body }}</span><br />
        <span>{{ workout.core }}</span><br />
        <span>{{ workout.cardio }}</span><br />
      </p>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'workouts',
  data () {
    return {
      workouts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchWorkouts()
      this.workouts = response.data
    }
  }
}
</script>