<template>
    <button
      class="button option-button"
      :class="{ 
        selected: isSelected,
        correct: isCorrect,
        incorrect: isIncorrect
       }"
      :disabled="isReadOnly"
      @click="$emit('select', label)"
    >
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      isCorrect: Boolean,
      isIncorrect: Boolean,
      isSelected: Boolean,
      isReadOnly: Boolean
    },
  };
</script>

<style scoped>

.option-button {
    width: 48%;
    height: 150px;
    font-weight: 600;
    font-size: large;
}

/* .option-button {
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface-muted);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
} */

.option-button.selected {
  background-color: var(--color-primary-soft);
  color: var(--color-text-primary);
  border-color: var(--color-primary-border);
}

.option-button.correct {
  background-color: var(--color-success);
  color: var(--white);
  border-color: var(--color-success);
}

.option-button.incorrect {
  background-color: var(--color-error);
  color: var(--white);
  border-color: var(--color-error);
}

/* .option-button:hover {
  background-color: var(--color-surface);
  border-color: var(--color-primary-border);
} */




</style>
  