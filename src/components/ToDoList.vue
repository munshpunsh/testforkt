<template>
  <div class="todolist">
      <div class="add__todo">
        <input v-model="newText">
        <button @click="addTodo">
          Добавить задачу
        </button>
      </div>
      <div class="sort__todo">
        <button @click="sortTodos($store.sort)">
          Сортировка
        </button>
      </div>
      <div class="todolist__item" v-for="todo in list" :key="todo.id">
        <input type="checkbox" v-model="todo.done" @click="doneTodo(todo.id,todo.done)" />
        <router-link :to="'/todoone/' + todo.id" class="todolist__item-text" :class="todo.done ? 'done' : 'will-done'" >{{ todo.text }}</router-link>
        <button @click="deleteTodo(todo.id)">Удалить</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data: () => {
    return {
      newText:''
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    list () {
      return this.$store.state.lists;
    }
  },
  methods: {
    addTodo () {
      this.$store.dispatch('addData',{'done': false,'text':this.newText,'createdBy': new Date()})
      this.newText = '';
      this.$router.push('/todolist/1')
    },
    deleteTodo (id) {
      this.$store.dispatch('deleteData',{id:id});
    },
    doneTodo (id,done) {
      this.$store.dispatch('setData',{id:id,done:!done});
    },
    editTodo (id,newText) {
      this.$store.dispatch('setData',{id:id,text:newText});
    },
    sortTodos (sort) {
      this.$store.dispatch('changeSort');
    }
  },
  created () {
    this.$store.dispatch('getData',{page:this.$route.params.id});
  },
  updated () {
    this.$store.dispatch('getData',{page:this.$route.params.id});
  }
}
</script>

<style>
  .add__todo {
    margin-bottom:15px;
  }
  .add__todo input {
    display:block;
    margin-bottom:10px;
  }
  .will-done {

  }
  .todolist__item-text {
    position:relative;
    margin: 0 10px;
  }
  .done:before {
    content:'';
    position:absolute;
    width:100%;
    top:50%;
    left:0;
    transform: translate(0,-50%);
    height:1px;
    background: black;
  }
  .todolist {
    max-width:1000px;
    margin:0 auto;
  }
</style>
