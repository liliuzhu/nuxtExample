<template>
  <div class="rc-News">
    {{ name }}
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'RcNews',
  data () {
    return {
      name: 'News'
    }
  },
  fetch () { // 组件内fetch在created后
    console.log('news fetchstrat', this.name, this.$axios.get)
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      let time = setTimeout(() => {
        // eslint-disable-next-line nuxt/no-this-in-fetch-data
        clearTimeout(time)
        time = null
        console.log('news fetchend')
        this.name = 'componentsend fetch'
        resolve()
      }, 1000)
    })
  },
  created () {
    console.log('news created')
  }
}
</script>
