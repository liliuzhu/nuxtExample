<template>
  <div class="rc-test">
    {{ uuid }}
    fetchNum: {{ fetchNum }}
    {{ userName }}
    <news />
    <br>
    <nuxt-link to="/">
      去首页
    </nuxt-link>
    <client-only placeholder="Loading...">
      <el-button type="primary">
        主要按钮2
      </el-button>
    </client-only>
    <el-button type="primary">
      主要按钮
    </el-button>
    <button @click="click">
      点击
    </button>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapState } from 'vuex'
export default {
  name: 'Test',
  // middleware: 'auth', // middleware/auth.js, 中间拦截,路由导航守卫
  // middleware () { // 和上面等效
  //   console.log('内', arguments)
  // },
  // beforeRouteLeave (to, from, next) {
  //   console.log('beforeRouteLeave', arguments)
  //   next()
  // },
  layout: 'blog',
  validate (context) { // 可用于校验请求参数
    console.log('validate', Object.keys(context), process.env.VUE_ENV === 'server', process.server)
    return true
  },
  // eslint-disable-next-line require-await
  async asyncData (context) { // 只能在page页面组件使用，无法在页面内组件使用
    // eslint-disable-next-line nuxt/no-this-in-fetch-data
    console.log('asyncData12', Object.keys(context), context.$axios === context.app.$axios)
    if (process.env.VUE_ENV !== 'erver') {
      // const { data } = await context.$axios.get('/prod-api/captchaImage')
      const { data } = await context.app.$getUuid()
      // console.log(12112, data)
      return { uuid: data.uuid }
    } else {
      return null
    }
  },
  data () {
    return {
      uuid: 'text122',
      fetchNum: ''
    }
  },
  fetch (context) { // 页面和组件均可使用, 但是页面中无法获取到组件的值，组件内是可以的
    console.log('fetch', Object.keys(context))
    let num = 1
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      let time = setTimeout(() => {
        // eslint-disable-next-line nuxt/no-this-in-fetch-data
        clearTimeout(time)
        time = null
        // console.log('setTest', num)
        context.store.commit('setTest', ++num)
        console.log('test fetchend')
        resolve()
      }, 200)
    })
  },
  head () {
    console.log('head test', process.env.VUE_ENV)
    return {
      title: this.uuid,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'keywords', name: 'keywords', content: 'keywords' }
      ]
    }
  },
  computed: {
    ...mapState({
      userName: state => state.user.name
    })
  },
  // watchQuery: ['page'], // 监控query参数变化，有变化相当于刷新页面
  created () {
    console.log('created', 'test')
  },
  mounted () {
    console.log('mounted', this.$axios, this.$cookies)
    // console.log(this.$loading)
  },
  methods: {
    click () {
      this.uuid = 'test'
      this.$store.commit('user/setName', '小郭')
      // this.$router.push({ path: '/test', query: { page: 2 } })
    }
  }
}
</script>
<style rel="stylesheet/css" type="text/css">
.rc-test {
  display: inline-block;
}
</style>
