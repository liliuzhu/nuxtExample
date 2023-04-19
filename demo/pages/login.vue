<template>
  <div class="rc-login">
    <input v-model="name" type="text">
    <input v-model="password" type="text">
    <button @click="login">
      登录
    </button>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  head () {
    return {
      title: '登录',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'keywords', name: 'keywords', content: 'keywords' }
      ]
    }
  },
  methods: {
    setToken () {
      this.$store.commit('setToken', 'abc123')
      this.$router.push('/test')
    },
    login () {
      if (this.name && this.password) {
        this.setToken()
      }
    }
  }
}
</script>
