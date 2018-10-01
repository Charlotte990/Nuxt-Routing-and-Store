<template>
  <div class="user-box">
    <div class="user-details">
      <h1>I am the specific user page:</h1>
      <h3>Name: {{user.name}}</h3>
      <h3>Age: {{user.age}}</h3>
      <h3>UUID: {{user.id}}</h3>
      <h3>Page: {{$route.path}}</h3>
    </div>
    <div class="user-image">
      <img :src="user.img"/>
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
      user: state => state.user
    })
  }
}
</script>

<style>
.user-box {
  margin: auto;
  width: 40%;
  height: 300px;
  padding: 10px;
  margin-top: 20px;
  border: 3px solid green;
}
h1 {
  margin: 20px 10px;
}
h3 {
  margin: 10px;
}
.user-details {
  width: 50%;
  float: left;
}
.user-image {
  float: right;
  width: 50%;
  height: 250px;
  margin: auto;
}
.user-image img {
  width: 200px;
  float: right;
  margin: 35px;
}
</style>
