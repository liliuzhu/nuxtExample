export default {
  head () {
    console.log('head test', process.env.VUE_ENV)
    return {
      title: this.uuid || this.indexPage,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' },
        { hid: 'keywords', name: 'keywords', content: 'keywords' }
      ]
    }
  },
  created () {
    console.log('mixins created')
  }
}
