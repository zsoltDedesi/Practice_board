<template>
  <div class="card">
    <h3 class="question">{{ Number(index)+1 }}, {{ card.question }}</h3>
    <div class="options-container">
      <OptionButton
        v-for="(option, index) in card.options" 
        :key="index" 
        :label="option"
        :isSelected="selectedOption === option"
        @select="selectOptions"
      />

    </div>
  </div>

</template>


<script>
import { useQuizStore } from '../stores/quiz';
import { useCardStore } from '../stores/card';
import OptionButton from './OptionButton.vue';

export default {
  components: { OptionButton },
  props: {
    card: Object,
    index: Number,
  },

  // data() {
  //   return {
  //     selectedOption: null,
  //   };
  // },
  created() {
    this.quizStore = useQuizStore()
    this.cardStore = useCardStore()
  },

  methods: {
    selectOptions(option) {
      console.log('clicked option:', option);
      this.quizStore.recordAnswer({
        questionId: this.index,
        selectedOption: option,
        isCorrect: option === this.card.correctAnswer
        });
      
      if (this.selectedOption) {
        const alreadyAnswered = this.cardStore.answeredCards.some(c => c.question === this.card.question);
        if(!alreadyAnswered){
          this.cardStore.answerCard(this.card)
          }
        };
      },
    },

  computed: {
    selectedOption() {
      const id = Number(this.index);
      const answer = this.quizStore.answers.find((a) => Number(a.questionId) === id);
      const valReturn = answer?.selectedOption || null;
      return valReturn
    }
  },
  
  };

</script>


<style scoped>

.question {
  font-weight: 800;
  margin-bottom: 2em;
}

.card {
  width: 50%;
  max-width: 1000px;
  min-width: 400px;
  /* margin: auto; */
  /* padding: ; */
}

.options-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5em;
  margin: 1em 0;
}

</style>