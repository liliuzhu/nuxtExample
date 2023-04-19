<template>
  <div class="rc-vueRouter-home">
    vueRouter-about
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'vueRouter-home',
  validate (context) { // 可用于校验请求参数
    console.log('validate home', Object.keys(context))
    return true
  },
  data () {
    return {}
  }
}
</script>
