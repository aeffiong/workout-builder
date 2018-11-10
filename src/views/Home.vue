<template lang="pug">
  div(class="home")
    img(alt="workout builder woman putting on shoes" src="../assets/fitness.jpg")
    Header(msg="Design Your Own Workout")
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header
  }
}
</script>
