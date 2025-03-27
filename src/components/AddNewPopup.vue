<template>
  <div class="popup-overlay">

    <div class="popup-content">
      <h3 class="popup-title">
        Add questions
      </h3>
      <div class="json-editor-container">
        <Codemirror 
          v-model="jsonInput"
          :basic="true"
          :placeholder="placeholderText"
          :extensions="extensions" />
      </div>
      <div class="button-container">
        <button @click="closePopup" class="button secondary">Cancel</button>
        <button @click="validateJson" class="button secondary">Validate</button>
        <button @click="createCardData" class="button primary">Create cards</button>
      </div>
    </div>
  </div>


</template>


<script>
import dedent from 'dedent';
import { Codemirror } from 'vue-codemirror';
import { json } from '@codemirror/lang-json'
import { oneDark } from '@codemirror/theme-one-dark';
import { useCardStore } from '../stores/card';

export default {
  components: { Codemirror },
  data() {
    return {
      tempData: Object,
      dataIsValid: false,
      statusMessage: '',
      statusType: '',
      statusVisible: false,
      theme: "",
      jsonInput: '',
      jsonError: null,
      placeholderText: dedent(`Json example for structure:
      {
        "question": 'question text',
        "options": ["True", "False", ...],
        "correctAnswer": "answer text"
      },
      {
        . . .
      },
      . . . ,`),
    };
  },

  created(){
    this.cardStore = useCardStore();
  },

  mounted() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.theme = savedTheme;
  },

  methods: {
    validateJson() {
      try {
        if (!this.jsonInput.trim()) {
          this.jsonError = `Input box is empty`
          this.dataIsValid = false;
          return;
        }

        this.tempData = JSON.parse(this.jsonInput);
        this.jsonError = null;
        this.dataIsValid = true;
        
      } catch (e) {
        this.jsonError = `Wrong json syntax, error message ${e.message}`
        this.dataIsValid = false;

      } finally {
        console.log(this.jsonError)
      }

    },

    createCardData() {
      if (this.dataIsValid !== true) {
        this.validateJson()
      }
      if (this.dataIsValid && this.tempData) {
        if (Array.isArray(this.tempData)) {
          this.tempData.forEach(card => this.cardStore.addCard(card))
        } else {
          this.cardStore.addCard(this.tempData)
        }
        this.$emit("create");
        this.$emit("close");
      }
    },

    closePopup() {
      this.$emit("close")
    },
  },

  computed: {
    extensions() {
      return this.theme === 'dark' ? [json(), oneDark] : [json()]
    },
  },

};

</script>


<style scoped>
/* background fade */
.popup-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-soft);

  width: 70%;
  max-width: 700px;
  min-width: 300px;

  height: 50%;
  max-height: 500px;
  min-height: 400px;

  animation: popup-fade-in 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.popup-title {
  text-align: left;
  font-size: 1.5rem;
  /* margin-bottom: 1rem; */
}

.popup-text {
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
}

.button-container {
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.button.secondary:hover {
  background-color: var(--color-primary-hover);
  color: white;
}

.json-editor-container {
  /* width: 100%; */
  height: 100%;
  overflow: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background-color: var(--color-surface);
}

::v-deep(.cm-editor) {
  border: none;
  outline: none;
}

@keyframes popup-fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>