import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    answers: []
  }),

  actions: {
    recordAnswer({ questionId, selectedOption, isCorrect }) {
      this.answers.push({
        questionId,
        selectedOption,
        isCorrect,
        // timestamp: new Date().toISOString()
      })
    },
    resetAnswers() {
      this.answers = []
    }
  },

  getters: {
    correctCount: (state) => state.answers.filter(a => a.isCorrect).length,
    totalCount: (state) => state.answers.length,
    scorePercentage: (state) => state.answers.length
      ? Math.round((state.answers.filter(a => a.isCorrect).length / state.answers.length) * 100)
      : 0
  }
})
