import { defineStore } from "pinia";

export const useCardStore = defineStore("card", {
  state: () => ({
    cards: [],
    answeredCards: [],
  }),

  actions: {
    addCard(card) {
      this.cards.push(card);
    },
    answerCard(card) {
      this.answeredCards.push(card);
    },
    resetAll() {
      this.cards = [];
      this.answeredCards = [];
    },
  },

  getters: {
    progressPercentage(state) {
      if (state.cards.length === 0) return 0;
      return Math.round((state.answeredCards.length / state.cards.length) * 100);
    },
  },

  persist: {
    enabled: true,
    storage: sessionStorage,
  },
});
