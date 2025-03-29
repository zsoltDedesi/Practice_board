import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    answers: [],
  }),

  actions: {
    recordAnswer({ questionId, selectedOption, isCorrect }) {
      const existing = this.answers.find((a) => a.questionId === questionId);

      if (existing) {
        console.log("Update existing record");
        existing.selectedOption = selectedOption;
        existing.isCorrect = isCorrect;
        return;
      } else {
        console.log("Add new record");
        this.answers.push({
          questionId,
          selectedOption,
          isCorrect,
          // timestamp: new Date().toISOString()
        });
      }
    },

    resetAnswers() {
      this.answers = [];
    },
  },

  getters: {
    correctCount: (state) => state.answers.filter((a) => a.isCorrect).length,
    totalCount: (state) => state.answers.length,
    scorePercentage: (state) =>
      state.answers.length
        ? Math.round(
            (state.answers.filter((a) => a.isCorrect).length /
              state.answers.length) *
              100
          )
        : 0,
  },

  persist: {
    enabled: true,
    storage: sessionStorage,
  },
});
