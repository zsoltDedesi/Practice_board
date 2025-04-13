<template>
  <div class="btn-container">
    <button type="button" class="button primary" @click="resetQuestions">Clear all questions</button>
    <button type="button" class="button primary" @click="showPopup">Add questions</button>
  </div>
  <AddNewPopup v-if="isPopupVisible" @close="isPopupVisible = false" />
  <div>
    <div v-if="cards.length === 0" class="welcome-text">
      <h1 class="welcome-title">
        Welcome to <span class="welcome-highlight">Learning Board!</span>
      </h1>

      <p class="welcome-subtitle">
        Sharpen your knowledge with interactive question cards.
      </p>

      <div class="feature-list">
        <p>Track your <span>progress</span></p>
        <p>Test your <span>understanding</span></p>
        <p>Learn at your <span>own pace</span></p>
      </div>

    </div>
    <div v-else class="card-container">
      <QuestionCard v-for="(card, index) in cards" :key="index" :card="card" :index="index" class="card" />
    </div>
  </div>
</template>


<script>
import { useQuizStore } from '../stores/quiz';
import { useCardStore } from '../stores/card';
import AddNewPopup from '../components/AddNewPopup.vue';
import QuestionCard from '../components/QuestionCard.vue';
import { toast } from '../utils/toast';

export default {
  components: { AddNewPopup, QuestionCard },
  data() {
    return {
      titleMsg: "Learning Agile",
      isPopupVisible: false,
      cardId: 1,
    };
  },
  created() {
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
      toast.success(`Your question list is now empty.`)
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

.btn-container button {
  height: 3rem;
}

.welcome-text {
  color: var(--color-text-secondary);
  flex-direction: column;
  text-align: center;
} 

.welcome-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-text-primary);
}

.welcome-highlight {
  color: var(--color-primary);
}

.welcome-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  margin: 1.5rem 0;
}

.feature-list p {
  font-size: 1.25rem;
  margin: 0.5rem 0;
  color: var(--color-text-secondary);
}

.feature-list span {
  color: var(--color-primary);
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
