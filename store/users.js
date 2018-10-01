'use strict'

export const state = () => ({
  user: {},

  users: [
    {name: 'Jess', age: 23, id: 'abc123', img:'https://get.pxhere.com/photo/avatar-people-person-business-user-woman-character-set-icon-portrait-profile-pictograph-hairstyle-coat-fashion-neck-peaceful-head-face-design-concept-symbol-smile-casual-elements-hair-facial-expression-man-nose-cartoon-beauty-cheek-male-forehead-shoulder-girl-emotion-human-arm-mouth-hand-joint-brown-hair-finger-long-hair-illustration-human-behavior-clip-art-silhouette-1447677.jpg'},
    {name: 'Dez', age: 40, id: 'def456', img:'https://www.theieltsacademy.in/images/avtar.png'}
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
