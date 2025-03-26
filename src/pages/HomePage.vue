<template>
  <div class="btn-container">
    <button type="button" class="button primary" @click="showPopup">Add new questions</button>
  </div>
  <AddNewPopup v-if="isPopupVisible" @close="isPopupVisible = false"/>

  <div class="card">
    <button type="button" @click="count++" class="button primary">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <!-- 
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>


<script>
import AddNewPopup from '../components/AddNewPopup.vue';


export default {
  components: {AddNewPopup},
  data() {
    return {
      titleMsg: "Learning Agile",
      count: 0,
      isPopupVisible: false,
    };
  },

  methods: {
    showPopup() {
      this.isPopupVisible = !this.isPopupVisible
    }
  }

};



</script>



<style scoped>
.btn-container {
  display: flex;
  width: 80%;
  margin: 3rem auto;
  justify-content: end;
  align-items: center;
}

.card {
  width: 50%;
  margin: auto;
}
</style>
