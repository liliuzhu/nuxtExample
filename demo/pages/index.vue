<template>
  <div>
    {{ indexPage }}
    <nuxt-link to="/test">
      去test
    </nuxt-link>
    <a href="/logout">退出登录</a>
  </div>
</template>

<script type="text/ecmascript-6">
import headMixins from '../mixins/head'
export default {
  name: 'IndexPage',
  mixins: [headMixins],
  validate (context) { // 可用于校验请求参数
    // console.log('validate', context)
    return true
  },
  data () {
    return {
      indexPage: 'IndexPage1'
    }
  },
  created () {
    console.log('IndexPage created')
  }
}
</script>
