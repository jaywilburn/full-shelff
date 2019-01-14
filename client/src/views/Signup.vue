<template>
  <div class="signup-section">
    <h1>Sign Up</h1>
    <input type="email" v-model="email" name="email" id="">
    <input type="text" v-model="password" name="password" id="">
    <button @click="signUp">Connect</button>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      console.log('Signing up!')
    }
  }
}
</script>

<style>

</style>
