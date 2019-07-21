<template>
  <div id="app">
    <p style="text-align: center">
      Быберите страницу<br>
      <router-link v-for="item in list" :to="'/todolist/' + item" class="link" :key="item">{{ item }}</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed:{
      list () {
        if (this.$store.state.total % 10 == 0) {
          return Math.floor(this.$store.state.total/10)
        } else {
          return Math.floor(this.$store.state.total/10) + 1
        }
      }
    },
    beforeCreate () {
      this.$store.dispatch('getData',{page:this.$route.params.id,sort:'asc'});
    },
    updated() {
      this.$store.dispatch('getData',{page:this.$route.params.id,sort:'asc'});
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
  }
  .link {
    display: inline-block;
    margin:0 10px;
    color: black;
    text-decoration: none;
    font-size:16px;
    font-weight: bold;
  }
  .router-link-active {
    color: orange;
  }
</style>
