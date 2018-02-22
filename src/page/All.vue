<template>
  <main class="main">
    <ul
      v-if="sharedState.todos.length !== 0"
      class="todo-list"
    >
      <li
        v-for="todo in sharedState.todos"
        :key="todo.id"
        :class="{completed: todo.completed}"
        @mouseenter="showButton(todo.id)"
        @mouseleave="hideButton(todo.id)"
        class="todo-list-item"
      >
        <input
          v-bind:id="todo.id"
          type="checkbox"
          :checked="todo.completed"
          @click="changeChecked(todo.id)"
        >
        <label v-bind:for="todo.id">
          <span>id:{{todo.id}}</span>
          <span>{{todo.memo}}</span>
        </label>
        <button
          v-show="todo.isButtonShow"
          @click="removeTodo(todo.id)"
          class="todo-list-item__button"
        >削除</button>
      </li>
    </ul>
    <div v-else><p class="tac">表示するTodoがありません</p></div>
  </main>
</template>

<script>
export default {
  created: function () {
    this.$store.commit('loadTodo');
  },
  computed: {
    sharedState() {
      return this.$store.state;
    },
  },
  methods: {
    /**
     * クリックされた要素のIDを引数としてStore.actionに渡し、
     * Todoのcompletedのブーリン値を変更する
     * @param {Number} id
     */
    changeChecked(id) {
      this.$store.commit('changeChecked', id);
    },
    /**
     * 削除ボタンを表示
     * @param {Number} id
     */
    showButton(id) {
      this.$store.commit('showButton', id);
    },
    /**
     * 削除ボタンを非表示
     * @param {Number} id
     */
    hideButton(id) {
      this.$store.commit('hideButton', id);
    },
    removeTodo(id) {
      this.$store.commit('removeTodo', id);
      this.$store.commit('saveTodo');
    },
  },
}
</script>

<style lang="scss" scoped>
  .tac {
    text-align: center;
  }
  .completed {
    label {
      text-decoration: line-through;
      color: #d8d8da;
    }
  }
  .todo-list {
    width: 80%;
    max-width: 960px;
    margin: 0 auto;
    border-top: 1px solid #e6e6e6;
    border-right: 1px solid #e6e6e6;
    border-left: 1px solid #e6e6e6;
    box-shadow: 0 3px 16px rgba(0, 0, 0, .016);
    &-item {
      position: relative;
      padding: 20px;
      background-color: #fff;
      border-bottom: 1px solid #e6e6e6;
      font-size: 16px;
      &__button {
        position: absolute;
        top: 50%;
        right: 20px;
        height: 22px;
        margin-top: -11px;
        border: 1px solid #e6e6e6;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, .06);
      }
    }
  }
</style>
