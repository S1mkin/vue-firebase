<template>
  <div id="app">
    <Scores />
  </div>
</template>

<script>
import Scores from './components/scores.vue'

export default {
  name: 'app',
  components: {
    Scores
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
