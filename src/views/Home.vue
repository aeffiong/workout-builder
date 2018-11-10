<template lang="pug">
  div(class="home")
    img(alt="workout builder woman putting on shoes" src="../assets/fitness.jpg")
    Header(msg="Design Your Own Workout")
    button(type='button' @click="handleButtonClick") Click here to get started 
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  },
  methods: {
    handleButtonClick() {
      this.$router.push('design-workout')
    }
  }
}
</script>
