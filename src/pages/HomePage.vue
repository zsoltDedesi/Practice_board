<template>
  <div ref="scrollContainer" class="home-container">
    <div class="btn-container">
      <button v-if="cards.length !== 0" type="button" class="button primary left" @click="goToStats">Check answers</button>
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
        <ScrollToTop :targetRef="scrollContainer"/>
      </div>
    </div>
  </div>
</template>


<script>
import { toast } from '../utils/toast';
import { useQuizStore } from '../stores/quiz';
import { useCardStore } from '../stores/card';

import AddNewPopup from '../components/AddNewPopup.vue';
import QuestionCard from '../components/QuestionCard.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import { useRouter } from 'vue-router';

export default {
  components: { AddNewPopup, QuestionCard, ScrollToTop },
  data() {
    return {
      titleMsg: "Learning Agile",
      isPopupVisible: false,
      cardId: 1,
      scrollContainer: null,
    };
  },
  created() {
    this.quizStore = useQuizStore()
    this.cardStore = useCardStore()
  },
  mounted() {
    this.scrollContainer = this.$refs.scrollContainer;
  },

  methods: {
    showPopup() {
      this.isPopupVisible = !this.isPopupVisible
    },

    resetQuestions() {
      this.quizStore.resetAnswers();
      this.cardStore.resetAll();
      toast.success(`Your question list is now empty.`)
    },
    goToStats() {
      this.$router.push("/statistics");
    }
  },
  computed: {
    cards() {
      return this.cardStore.cards;
    }
  },
};
</script>


<style scoped>

.home-container{
  height: calc(100vh - 130px);
  overflow-y: auto;
}

.welcome-text,
.btn-container {
  display: flex;
  align-items: center;
}

.btn-container {
  justify-content: end;
  margin: 3rem;
  gap: 24px;
}

.button.left {
  margin-right: auto;
}

.welcome-text {
  justify-content: center;

  color: var(--color-text-secondary);
  flex-direction: column;
  text-align: center;
  /* width: 100%; */
  min-height: calc(50vh);
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
