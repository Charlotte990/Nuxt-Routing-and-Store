'use strict'

import Vuex from 'vuex'

import users from '@/store/users'


export const state = () => ({
  //
})

export const types = {
  //
}

export const getters = {
  //
}

export const mutations = {
  //
}

export const actions = {
  //
}

let store

const initStore = () => {
  return store || (store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
      users
    }
  }))
}

export default initStore
