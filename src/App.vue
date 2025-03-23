<template>
  <header class="app-header">
    <nav class="nav-left">
      <a href="#" class="nav-link active"><router-link to="/">Home</router-link></a>
      <a href="#" class="nav-link"><router-link to="/statistics">Statistics</router-link></a>
    </nav>

    <div class="nav-center">
      <h1 class="title">Exercise: <span>{Topic title}</span></h1>
      <div class="progress-bar">
        <div class="progress"></div>
      </div>
    </div>

    <nav class="nav-right">
      <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
      <a href="#" class="nav-link">Learning board</a>
    </nav>
</header>




  <main>
      <router-view/>
  </main>

</template>

<script>
export default {
  name: "App",
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
}

.nav-left,
.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  font-weight: 500;
  color: var(--color-text-primary);
  position: relative;
}

.nav-link.active::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-primary);
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-center {
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
  width: 60%;
  height: 6px;
  border-radius: 4px;
  overflow: hidden;
  margin: 0.5rem auto;
  /* display: flex;
  justify-content: center; */
}

.progress {
  height: 100%;
  width: 60%; /* -> dynamic value*/
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.theme-toggle {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--color-text-primary);
}


/* 
header ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

header li {
  margin-right: 1rem;
}
*/
header a {

  text-decoration: none;
}

/* header a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
} */

</style>
