export default ({ $axios, app }, inject) => {
  // app.$getUuid = ()=> $axios({})
  inject('getUuid', params => $axios({ // 相当于 this.$getUuid 和context.app.$getUuid还有store内
    url: '/prod-api/captchaImage',
    method: 'get',
    params
  }))
}
