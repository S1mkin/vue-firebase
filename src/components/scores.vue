<template>
  <div class="score-wrapper">

    <h1>Score</h1>

    <table>
      <tr>
        <th>User</th>
        <th>City</th>
        <th>Score</th>
      </tr>
      <tr v-for="(score, idx) in scores" :key="idx">
        <td>{{ score.user }}</td>
        <td>{{ score.city }}</td>
        <td>{{ score.score }}</td>
      </tr>
    </table>

    <h2>Add score</h2>

    <form @submit.prevent="ADD_SCORE(score.user, score.city, score.score)">
      <div><input v-model="score.user" placeholder="Name" type="text"></div>
      <div><input v-model="score.city" placeholder="City" type="text"></div>
      <div><input v-model="score.score" placeholder="Score" type="text"></div>
      <button type="submit" :disabled="score.score == 0">Add New Score</button>
    </form>


  </div>
</template>

<script>

import firebase from 'firebase/app'

export default {
  name: 'Scores',
  data () {
    return {
      scores: [],
      score: {
        user: '',
        city: '',
        score: 0
      }
    }
  },
  firestore () {
    return {
      scores: firebase.firestore().collection('scores').orderBy('score', 'desc')
    }
  },
  methods: {
    ADD_SCORE (user, city, score) {
      this.score.user = '';
      this.score.city = '';
      this.score.score = '';
      firebase.firestore().collection('scores').add({ user, city, score })
    }
  }
}
</script>

<style scoped>

  table {
    margin: 0 auto;
    border-spacing: 0; 
    border-collapse: collapse;
  }

  table th {
    font-weight: bold; 
    border: 1px solid #333; 
    padding: 4px 8px; 
    text-align: center;
  }

  table td {
    border: 1px solid #333; 
    padding: 4px 8px; 
    text-align: center;
    min-width: 60px;
  }

</style>