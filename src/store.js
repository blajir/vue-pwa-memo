const state = {
  todos: [
    {
      id: 1,
      memo: 'スーパーに買い物に行く',
      completed: false,
      isButtonShow: false,
    },
    {
      id: 2,
      memo: '飛行機のチケットを予約する',
      completed: false,
      isButtonShow: false,
    },
    {
      id: 3,
      memo: '会議室の予約をする',
      completed: false,
      isButtonShow: false,
    },
  ],
};

const util = {
  // memos の中から id が一致するメモを返す
  findIndex(memos, id) {
    const targetId = parseInt(id, 10);
    return memos.findIndex((memo) => {
      return memo.id === targetId;
    })
  }
};

const mutations = {
  /**
   * Todoをオブジェクト形式でtodosに格納する
   * @param {Object} obj IDとmemoが含まれたオブジェクト
   */
  addMemo(state, obj) {
    obj.id = state.todos.reduce((id, todo) => {
      return id < todo.id ? todo.id : id;
    }, 0) + 1;
    state.todos.push(obj);
  },
  /**
   * Todoが完了したかどうかを判定するcompletedのブーリン値をトグルさせる
   * @param {Number} n
   */
  changeChecked(state, id) {
    const index = util.findIndex(state.todos, id);
    state.todos[index].completed = !state.todos[index].completed;
  },
  /**
   * Todoを削除する
   * @param {Number} id
   */
  removeTodo(state, id) {
    const index = util.findIndex(state.todos, id);
    state.todos.splice(index, 1);
  },
  /**
   * 削除ボタンを表示
   * @param {Number} index
   */
  showButton(state, id) {
    const index = util.findIndex(state.todos, id);
    state.todos[index].isButtonShow = !state.todos[index].isButtonShow;
  },
  /**
   * 削除ボタンを非表示
   * @param {Number} index
   */
  hideButton(state, id) {
    const index = util.findIndex(state.todos, id);
    state.todos[index].isButtonShow = !state.todos[index].isButtonShow;
  },
  /**
   * ローカルストレージにTodoを保存する
   */
  saveTodo(state) {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },
  /**
   * ローカルストレージの値を読み込む
   */
  loadTodo(state) {
    state.todos = JSON.parse(localStorage.getItem('todos'));
    if(!state.todos) {
      state.todos = [
        {
          id: 1,
          memo: 'スーパーに買い物に行く',
          completed: false,
          isButtonShow: false,
        },
        {
          id: 2,
          memo: '飛行機のチケットを予約する',
          completed: false,
          isButtonShow: false,
        },
        {
          id: 3,
          memo: '会議室の予約をする',
          completed: false,
          isButtonShow: false,
        },
      ];
    }
  },
};

export default {
  state,
  mutations,
}
