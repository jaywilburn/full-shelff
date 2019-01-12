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
import firebase from 'firebase/app'
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
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          console.log('User is logged in')
          this.$router.replace('home')
          this.email = ''
          this.password = ''
        }, err => {
          console.log('Error on sign up: ' + err.message)
        }
      )
    }
  }
}
</script>

<style>

</style>
