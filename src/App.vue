<template>
  <div id="app">
    <header-component/>
    <router-view/>
    <footer-component @addMemo="addMemo"/>
  </div>
</template>

<script>
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  name: 'app',
  methods: {
    /**
     * 入力されたメモをオブジェクトに格納して、Storeに格納する
     * @param {String} memo
     */
    addMemo(memo) {
      const obj = {
        'memo': memo,
        'completed': false,
        'isButtonShow': false,
      }
      this.$store.commit('addMemo', obj);
      this.$store.commit('saveTodo');
    },
  },
}
</script>

<style>
body {
  background-color: #f0f0f0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 100px;
  box-sizing: border-box;
}
</style>
