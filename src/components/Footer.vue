<template>
  <footer class="footer">
    <input
      type="text"
      placeholder="Todoを追加"
      v-model="memo"
      class="footer__input"
    >
    <button
      @click="$emit('addMemo', memo)"
      class="footer__button"
    >登録する</button>
  </footer>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      memo: '',
    }
  },
}
</script>


<style lang="scss" scoped>
.footer{
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px 10px;
  background-color: #525252;
  text-align: center;
  box-sizing: border-box;
  &__input {
    min-width: 200px;
    height: 40px;
    border: 0;
    padding: 15px;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    vertical-align: middle;
  }
  &__button {
    display: inline-block;
    height: 40px;
    margin-left: 15px;
    padding: 0 10px;
    border: 0;
    border-radius: 4px;
    background-color: #35af4a;
    box-sizing: border-box;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    vertical-align: middle;
  }
}
</style>
