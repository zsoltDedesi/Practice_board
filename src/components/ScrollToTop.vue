<template>
  <button class="button primary top-btn-container" v-show="isVisible" @click="scrollToTop">
    <TopIcon class="icon" />
  </button>
</template>


<script>
import TopIcon from '@/assets/icons/Top_Icon.svg';

export default {
  props: {targetRef: Object},
  components: { TopIcon },
  data() {
    return {
      isVisible: false,
    };
  },

  watch: {
    targetRef: {
      immediate: true,
      handler(newVal, oldVal) {
        oldVal?.removeEventListener('scroll', this.handleScroll);
        newVal?.addEventListener('scroll', this.handleScroll);
      }
    }
  },
  
  mounted() {
    this.targetRef?.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    this.targetRef?.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll(e) {
      const scrollTop = e.target.scrollTop;
      const triggerHeight = e.target.clientHeight;

      this.isVisible = scrollTop > triggerHeight;
    },

    scrollToTop() {
      this.targetRef?.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
}

</script>

<style scoped>
.top-btn-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.icon {
  stroke-width: 4;
  color: var(--color-text-primary);
}
</style>