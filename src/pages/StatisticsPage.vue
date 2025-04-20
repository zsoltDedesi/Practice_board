<template>
  <div class="statistics-body-text">
    <div v-if="cards.length === 0" class="empty-state">
      <h2>Nothing to analyze yet.</h2>
      <p>Answer some question and track your progress here!</p>
      <button class="button primary home-btn" @click="$router.push('/')">
        Go to Home
      </button>
    </div>
    <div v-else class="statistics-body">
      <div class="statistics-info-container">
        INFO
      </div>
      <div class="card-container">
        <QuestionCard v-for="(card, index) in cards" :key="index" :card="card" :index="index" :isReadOnlyState="true" class="card" />
      </div>
    </div>
  </div>

</template>


<script>
import { useQuizStore } from '../stores/quiz';
import { useCardStore } from '../stores/card';
import QuestionCard from '../components/QuestionCard.vue';

export default {
  components: { QuestionCard },
  // data() {

  // },

  created() {
    this.quizStore = useQuizStore()
    this.cardStore = useCardStore()
  },

  computed: {
    cards() {
      return this.cardStore.cards;
    }
  },




}

</script>


<style scoped>
.statistics-body-text {
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: auto; */
  min-height: calc(90vh);
}

.home-btn {
  margin: 4rem;
}

.empty-state {
  text-align: center;
}

.statistics-body {
  display: flex;
  flex-direction: row;
  width: 100%;
  /* height: calc(100vh - 10rem); */
  height: calc(100vh - 100px - 4rem);
  overflow: hidden;
}

.card-container {
  flex: 1;
  overflow-y: auto;
  padding: 2rem 2rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.card {
  width: auto;
}

.statistics-info-container {
  width: 35%;
  background-color: var(--color-surface);
  margin: 2rem;
  padding: 2rem;
  /* height: calc(100vh - 10rem); */
  height: calc(100vh - 100px - 4rem);
  /* box-sizing: border-box; */
  /* position: sticky; */
  top: 0;
  /* overflow: hidden; */
  border-radius: var(--border-radius);
}




</style>