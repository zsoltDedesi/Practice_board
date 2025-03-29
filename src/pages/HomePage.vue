<template>
  <div class="btn-container">
    <button type="button" class="button primary" @click="resetQuestions">Reset questions</button>
    <button type="button" class="button primary" @click="showPopup">Add new questions</button>
  </div>
  <AddNewPopup v-if="isPopupVisible" @close="isPopupVisible = false"/>
  <div class="quiz-container">
    <div v-if="cards.length === 0" class="welcome-text">
      <p>
        Place of welcome text
      </p>
    </div>
    <div v-else class="card-container">
      <QuestionCard 
      v-for="(card, index) in cards" 
      :key="index" 
      :card="card" 
      :index="index"
      class="card"/>
    </div>
  </div>
</template>


<script>
import { useQuizStore } from '../stores/quiz';
import { useCardStore } from '../stores/card';
import AddNewPopup from '../components/AddNewPopup.vue';
import QuestionCard from '../components/QuestionCard.vue';

export default {
  components: { AddNewPopup, QuestionCard },
  data() {
    return {
      titleMsg: "Learning Agile",
      isPopupVisible: false,
      cardId: 1,
    };
  },
  created(){
    this.quizStore = useQuizStore()
    this.cardStore = useCardStore()
  },

  methods: {
    showPopup() {
      this.isPopupVisible = !this.isPopupVisible
    },

    resetQuestions() {
      this.quizStore.resetAnswers();
      this.cardStore.resetAll();
    }
  },

  computed: {
    cards() {
      return this.cardStore.cards;
    }
  }

};
</script>


<style scoped>

.welcome-text,
.btn-container {
  display: flex;
  width: 80%;
  margin: 3rem auto;
  align-items: center;
}

.btn-container {
  justify-content: end;
  gap: 24px;
}


.welcome-text {
  color: var(--color-text-secondary);
  text-align: center;
  justify-content: center;
  font-size: x-large;
  font-weight: 600;
}


.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
}
</style>
