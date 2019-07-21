import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';

//Подключение компоненетов
import ToDoOne from './components/ToDoOne.vue'
import ToDoList from './components/ToDoList.vue'
import Page404 from './components/Page404.vue'

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueRouter)

//Подключение БД
import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyDbR66s2iSGOjMdZ1BC9DKcBFGZHaqfTV4",
  authDomain: "todolist-166c7.firebaseapp.com",
  databaseURL: "https://todolist-166c7.firebaseio.com",
  projectId: "todolist-166c7",
  storageBucket: "todolist-166c7.appspot.com",
  messagingSenderId: "612707875643",
  appId: "1:612707875643:web:00d96caf1d7d630a"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

/*async function setDate () {
  const date = await db.collection('text');
  //date.add({'newSegrs':12553});
  /*date.docs.forEach(function (item) {
    if (item.id === 'HhrFw5EgCAg6qupnBBOf' ) {
      item.ref.delete();
    }
  });

  //console.log(date.docs[0].ref.delete());
}
setDate();*/

//Подключение VueX
const store = new Vuex.Store({
  state: {
    count: 0,
    total:0,
    sort:'desc',
    lists: []
  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeSort (state) {
      state.sort = state.sort === 'asc' ? 'desc' : 'asc';
    },
    init (state,obj) {
      state.lists = obj.newAray;
      state.total = obj.globalIndex;
    },
    initOne (state,obj) {
      state.lists = obj.newAray;
    },
    update (state,obj) {
      state.lists.unshift(obj);
    },
    delete (state,id) {
      state.lists.forEach((item,index) => {
        if (item.id === id) {
          state.lists.splice(index,1)
        }
      })
    }
  },
  actions: {
    changeSort ({ commit }) {
        commit('changeSort')
    },
    incrementAsync ({ commit }, data) {
      setTimeout(() => {
        commit('increment')
      }, data.amount)
    },
    async getData ({ commit }, params) {
      const data = await db.collection('todolist').orderBy('createdBy',this.state.sort).get();
      const limit = params.page * 10;
      const min = limit - 10;
      const max = limit;
      let newAray = [];
      let globalIndex = 0;
      data.forEach(function (item) {
          if (globalIndex >= min && globalIndex < max) {
            let obj = item.data();
            obj.id = item.id;
            newAray.push(obj);
          }
        globalIndex++
      });
      const obj = {
        newAray: newAray,
        globalIndex:globalIndex
      }
      commit('init',obj)
    },
    async getDataOne ({ commit }, params) {
      const data = await db.collection('todolist').get();
      let newAray = [];
      data.forEach(function (item) {
        if (item.id === params.id) {
          let obj = item.data();
          obj.id = item.id;
          newAray.push(obj);
        }
      })
      const obj = {
        newAray: newAray
      }
      commit('initOne',obj)
    },
    async addData ({ commit }, data) {
      const date = await db.collection('todolist');
      const id = await date.add(data).id;
      let obj = data;
      obj.id = id;
      commit('update',obj);
    },
    async deleteData ({ commit }, params) {
      const data = await db.collection('todolist').get();
      data.forEach(async function (item) {
        if (item.id === params.id) {
          await item.ref.delete();
          commit('delete',params.id)
        }
      });
    },
    async setData ({ commit }, params) {
      const data = await db.collection('todolist').get();
      data.forEach(async function (item) {
        if (item.id === params.id) {
          await item.ref.update({'done':params.done});
        }
      });
    },
    async editData ({ commit }, params) {
      const data = await db.collection('todolist').get();
      data.forEach(async function (item) {
        if (item.id === params.id) {
          await item.ref.update({'text':params.text});
        }
      });
    }
  }
})

//Подключение роутинга
const routes = [
  { path: '/todoone/:id', component: ToDoOne },
  { path: '/todolist/:id', component: ToDoList },
  { path: '/#/*', component: Page404 },
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
