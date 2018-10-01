'use strict'

export const state = () => ({
  user: {},

  users: [
    {name: 'John', age: 23, id: 'abc123'},
    {name: 'Dez', age: 80, id: 'def456'}
  ]
});

export const types = {
  SET_USER: 'SET_USER',
}

export const mutations = {
  [types.SET_USER] (state, { user }) {
    state.user = user || {}
  },
}

export const actions = {

  async fetchUser ({ commit, state }, { userId }) {
    const user = state.users.find(({id}) => id == userId)
  
    commit({
      type: types.SET_USER,
      user: user
    })
  }
}


export default {
  namespaced: true,
  state,
  types,
  actions,
  mutations
}
