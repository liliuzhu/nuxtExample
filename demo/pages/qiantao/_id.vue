<template>
  <div className="rc-index">
    qiantao-name:id
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'Index',
  middleware (context) { // 和上面等效
    console.log(context.params)
  },
  data () {
    return {}
  },
  beforeCreate () {
    console.log(this.$route)
  }
}
</script>
