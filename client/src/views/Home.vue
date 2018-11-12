<template lang="pug">
  div(class="home")
    img(alt="workout builder woman putting on shoes" src="../assets/fitness.jpg" class="mb-4")
    Header(msg="Design Your Own Workout")
    button( class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded mt-4" type='button' @click="handleButtonClick") Click here to get started 
</template>

<script>
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

<style>

</style>

