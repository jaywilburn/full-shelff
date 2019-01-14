<template>
  <div class="login-section">
    <h1>Login</h1>
    <input type="email" v-model="email" name="email" id="">
    <input type="text" v-model="password" name="password" id="">
    <button @click="loginApp">Connect</button>
    <p>Don't have an account? <router-link to="/signup">Signup Here</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginApp () {
    },
    signUp () {
      console.log('Poppin')
    }
  }
}
</script>

<style>

</style>
