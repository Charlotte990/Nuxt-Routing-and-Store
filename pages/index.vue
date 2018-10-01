<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Nuxt app
      </h1>
      <h2 class="subtitle">
        Using vuex-router-sync 
      </h2>
      <h4>Clicking a button will navigate to '/users/[userid]' going via the Vuex Store to load that users info on that page when it loads.</h4>
      <div class="links" v-for="user in users" :key="user.name">
        <router-link
          class="button--green"
          :to="{ name: 'users-id', params: { id: user.id }}">User: {{user.name}}</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('users', {
      users: state => state.users
  })
  },
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
