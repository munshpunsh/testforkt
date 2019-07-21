<template>
  <div class="todolist">
    <div v-if="loader" style="font-size:26px">
      LOADER
    </div>
    <div v-if="!loader">
      <div class="todolist__item" v-for="todo in list" :key="todo.id">
        <input type="checkbox" v-model="todo.done" @click="doneTodo(todo.id,todo.done)" />
        <input type="text" v-model="newText" placeholder="Введите новый текст" @input="editTodo(todo.id,newText)">
        <span class="todolist__item-text" :class="todo.done ? 'done' : 'will-done'" >{{ todo.text }}</span>
        <button @click="deleteTodo(todo.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data: () => {
    return {
      newText:'',
      loader: true
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
      this.$store.dispatch('editData',{id:id,text:newText});
    },
    sortTodos (sort) {
      this.$store.dispatch('changeSort');
    }
  },
  created () {
    this.$store.dispatch('getDataOne',{id:this.$route.params.id});
    setTimeout(() => {this.loader = false;},1000)
  },
  updated () {
    this.$store.dispatch('getDataOne',{id:this.$route.params.id});
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
