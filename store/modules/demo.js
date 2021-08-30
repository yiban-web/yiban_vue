// 示例vuex

const state = {
    example:"示例"
  };
  const mutations = {
    TO_EXAMPLE(state, data) { // 保存基金参数
      state.example = data
      // state = data
    },
  };
  const actions = {
    toExample({ commit },detail) {
      commit('TO_EXAMPLE', detail);
    },
  };
  
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  