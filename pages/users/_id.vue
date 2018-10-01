<template>
  <div class="user-box">
    <div class="user-details">
      <h1>I am the specific user page:</h1>
      <h3>Name: {{user.name}}</h3>
      <h3>Age: {{user.age}}</h3>
      <h3>UUID: {{user.id}}</h3>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  
  validate ({ params }) {
  return true
  },

  async fetch ({ store, params }) {
    await store.dispatch('users/fetchUser', {
      userId: params.id
    })
  },
  methods: {
    ...mapActions('users', {
      fetchUsers: 'fetchUser'
    }),
  },
  computed: {
    ...mapState('users', {
      user: state => state.user,
    })
  }
}
</script>

<style>
.user-box {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  margin-top: 20px;
}
h1 {
  margin: 20px 10px;
}
h3 {
  margin: 10px;
}
</style>
