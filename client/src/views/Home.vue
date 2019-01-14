<template>
  <div class="home">
    <h1>HOME</h1>
    <div>
      <p v-html="msg"></p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a consequatur magni. Atque, quam qui officiis ratione nemo culpa reprehenderit porro voluptatibus sint illum veritatis vel vitae, ad blanditiis illo?</p>'
    }
  },
  methods: {
    logout () {
      console.log('Stuff')
    }
  }
}
</script>
<style lang="scss">
.home {
  color: #111;
}
</style>
