<template>
  <header class="app-header">
    <nav class="nav-tabs">
      <router-link to="/" class="tab-link" exact-active-class="active">Home</router-link>
      <router-link to="/statistics" class="tab-link" exact-active-class="active">Statistics</router-link>
    </nav>

    <div v-if="isHome" class="nav-information">
      <h1 class="title">Practice progress</h1>
      <div class="progress-bar">
        <div class="progress" :style="progressStyle" ></div>
      </div>
    </div>

    <nav class="nav-right">
      <button v-if="theme === 'light'" @click="toggleTheme" class="theme-toggle">
        <SunIcon class="light-dark"/>
      </button>
      <button v-else @click="toggleTheme" class="theme-toggle">
        <MoonIcon class="light-dark"/>
      </button>

      <div class="nav-branding">Learning board</div>
    </nav>
  </header>

  <main>
    <router-view />
  </main>

</template>


<script>
import MoonIcon from '@/assets/Dark_Icon.svg';
import SunIcon from '@/assets/Light_Icon.svg';
import { useCardStore } from './stores/card';

export default {
  name: "App",
  data() {
    return {
      theme: "light",
      isHome: false,
    };
  },
  created(){
    this.cardStore = useCardStore();
  },
  mounted() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    };
    this.isHome = this.$route.path === '/';
  },
  methods: {
    toggleTheme() {
      const current = document.documentElement.getAttribute('data-theme');
      this.theme = current;
      const newTheme = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    },
  },
  components: {
    MoonIcon,
    SunIcon
  },
  watch: {
    $route(to) {
      this.isHome = to.path === '/';
    }
  },
  computed: {
    progressStyle() {
      return {'--progress-width': `${this.cardStore.progressPercentage}%`}
    }
  }
};

</script>


<style scoped>

body {
  font-family: Arial, sans-serif;
  color-scheme: light dark;
  margin: 0;
  padding: 0;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-surface);
  color: var(--color-text-primary);
  border-bottom: 1px solid var(--color-border);
  flex-wrap: wrap;
  gap: 1rem;
  height: 65px;
}

.nav-tabs,
.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  /* font-weight: 500; */
  font-size: 1.25rem;

}

.nav-branding,
.tab-link {
  font-weight: 500;
  color: var(--color-text-primary);
}

.tab-link {
  color: var(--color-text-primary);
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.tab-link::after {
  content: "";
  position: absolute;
  margin: 0 auto;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-text-primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.tab-link.active {
  color: var(--color-text-primary);
  font-weight: 600;
}

.tab-link.active::after {
  transform: scaleX(1);
}

.nav-information {
  text-align: center;
  flex: 1;
}

.title {
  margin: 0;
  padding-top: 0.5rem;
  font-size: 1.25rem;
  color: var(--color-text-primary);
}

.progress-bar {
  background-color: var(--color-surface-muted);
  width: 30%;
  height: 6px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0.5rem auto;
}

.progress {
  height: 100%;
  width: var(--progress-width); /* -> dynamically modified based on the content*/
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--color-text-primary);
}

.light-dark {
  width: 24px;
  height: 24px;
  display: inline-block;
  color: var(--color-text-primary);
}

</style>
