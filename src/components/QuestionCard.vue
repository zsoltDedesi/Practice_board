<template>
  <div class="card">
    <h3 class="question">`{{ Number(index)+1 }}, {{ card.question }}`</h3>
    <div class="options-container">
      <OptionButton 
        v-for="(option, index) in card.options" 
        :key="index" 
        :label="option"
        :isSelected="selectedOption === option"
        @click="selectOptions(option)"  />

    </div>
  </div>

</template>


<script>
import { useQuizStore } from '../stores/quiz';
import OptionButton from './OptionButton.vue';

export default {
  components: { OptionButton },
  props: {
    // cardId: Number,
    // question: '',
    // options: [],
    // correctAnswer: '',
    card: Object,
    index: Number,
  },

  data() {
    return {
      selectedOption: null,
      questionIndex: 1,
    };
  },
  created() {
    this.quizStore = useQuizStore()
  },

  methods: {
    selectOptions(option) {
      this.selectedOption = option;
      this.quizStore.recordAnswer({
        questionId: this.index,
        selectOptions: option,
        isCorrect: option === this.card.correctAnswer
        })
      },
    },
  };

</script>


<style scoped>

.card {
  width: 50%;
  /* margin: auto;
  display: flex;
  gap: 50px; */
}

.options-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

}

</style>