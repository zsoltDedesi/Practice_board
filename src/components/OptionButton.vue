<template>
    <button
      class="button"
      :class="{ selected: isSelected }"
      @click="$emit('select', label)"
    >
      {{ label }}
    </button>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      isSelected: Boolean,
      // isCorrect: Boolean
    },
  };
</script>

<style scoped>

button {
    width: 48%;
    height: 150px;
    font-weight: 600;
    font-size: large;
}

.selected {
    background-color: var(--color-primary-soft);
    color: var(--color-text-primary);
}


</style>
  