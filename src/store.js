import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [{ id: 111, name: 'task 1', status: 'not done' }, { id: 112, name: 'task 2', status: 'done' }, { id: 113, name: 'task 3', status: 'not done' }],
  },
  mutations: {
    change(state, todo) {
      state.todos.push(todo);
    },
  },
});
