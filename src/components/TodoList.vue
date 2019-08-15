<template>
  <div>
   <v-app>
    <v-row align="center">
      <v-form
        ref="form"
        v-model="valid"
      >
        <span style="color: red" v-if="error">No todo Entered</span>
        <v-card-text>Add new todo</v-card-text>
        <v-text-field
          v-model="newTodo"
          label="What are you planning to do"
          required
        ></v-text-field>

        <v-text-field
          v-model="imageSrc"
          label="Image url"
          required
        ></v-text-field>
        <v-btn small color="primary" @click="addNewTodo(newTodo, imageSrc)">Submit</v-btn>
      </v-form>
    <p v-if="notDelete">You said not to delete it</p>
    <v-card style="padding: .5rem; margin: .5rem"
                  v-for="(todo) in todos"
                  :key="todo.id"
                  max-width="344"
                  width="300"
                  class="mx-auto" >
            <v-list-item-avatar tile size="80">
              <v-img class="elevation-5" :src="todo.src"></v-img>
            </v-list-item-avatar>
            <v-cart-title>{{todo.name}}</v-cart-title>
            <v-card-text>{{todo.desc}}</v-card-text>
            <v-card-actions>
              <div v-if="checkStatus(todo) === 'not done' ">
                <v-btn small color="success" style="margin: 1rem" @click="changeStatusToDone(todo)">Done</v-btn>
                <v-btn small color="error" @click="deleteTodo(todo.id)">Delete</v-btn>
              </div>
              <div v-if="checkStatus(todo) === 'done'">
                <v-btn small color="warning" style="margin: 1rem"  @click="changeStatusToNotDone(todo)">
                  Re do
                </v-btn>
                <v-btn small color="error" @click="deleteTodo(todo.id)">Delete</v-btn>
              </div>
            </v-card-actions>
          </v-card>
      </v-row>
      </v-app>
  </div>
</template>

<script>

export default {

  data() {
    return {
      todos: [
        {
          id: 111,
          name: 'Buy Milk',
          status: 'not done',
          src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR78EyMFX-rD2nCzV3xc11jF7DC8-8cwL4neokr2EWG_EPm8Kr',
        },
        {
          id: 112,
          name: 'Go to USPS to ship books',
          status: 'done',
          src: 'https://www.usps.com/assets/images/campaigns/returns-2014/boxes-desktop.png',
        },
        {
          id: 113,
          name: 'Take car to Shop',
          status: 'not done',
          src: 'https://media.ed.edmunds-media.com/non-make/carsafety/carsafety_482_717.jpg',
        },
      ],
      notDelete: false,
      newTodo: '',
      error: false,
      imageSrc: '',
    };
  },
  methods: {
    checkStatus(todo) {
      return todo.status;
    },
    changeStatusToDone(todo) {
      todo.status = 'done';
    },
    changeStatusToNotDone(todo) {
      todo.status = 'not done';
    },
    deleteTodo(id) {
      const confirm = window.confirm('Are you sure you want to delete');
      if (confirm) {
        this.todos = this.todos.filter(todo => id !== todo.id)
        this.notDelete = false;
      } else {
        this.notDelete = true;
      }
    },
    addRandomId() {
      const min = 100;
      const max = 999;
      const random = Math.floor(Math.random() * (+max - +min)) + +min;
      return random;
    },
    addNewTodo(todo, imageSrc) {
      if (todo === '' || imageSrc === '') {
        this.error = true;
      } else {
        this.todos = this.todos.concat({
          id: this.addRandomId(),
          name: todo,
          src: imageSrc,
          status: 'not done',
        })
        this.newTodo = '';
        this.error = false;
        this.imageSrc = '';
      }
    },
  },
};
</script>
