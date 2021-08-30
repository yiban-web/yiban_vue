import Vue from 'vue';
import Vuex from 'vuex';
import get from './get';

Vue.use(Vuex);

import demo from './modules/demo'

const modules = {
    demo
}
console.log(modules)


//创建过程直截了当——仅需要提供一个state 对象和一些 mutation
const store = new Vuex.Store({
  modules,
  getters:get,
});

export default store;
