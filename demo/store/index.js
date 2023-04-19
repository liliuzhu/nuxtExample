// import Vue from 'vue'
// import Vuex, { Store } from 'vuex'
// import user from './user'
// Vue.use(Vuex)
//
// export default () => {
//   return new Store({
//     state: () => ({
//       token: '',
//       test: ''
//     }),
//     modules: {
//       user
//     },
//     mutations: {
//       setToken (state, token) {
//         state.token = token
//         this.$cookies.set('token', token)
//       },
//       getToken (state) {
//         state.token = this.$cookies.get('token')
//       },
//       setTest (state, test) {
//         state.test = test
//       }
//     },
//     actions: {
//       nuxtServerInit (store, context) {
//         // store.commit('setToken', '31131313')
//         console.log('nuxtServerInit', Object.keys(context))
//         // if (req.session.user) {
//         //   commit('user', req.session.user)
//         // }
//       }
//     }
//   })
// }

export const state = function () {
  return {
    token: '',
    test: ''
  }
}
export const mutations = {
  setToken (state, token) {
    console.log('setToken', this)
    state.token = token
    this.$cookies.set('token', token)
  },
  getToken (state) {
    console.log('getToken', this.$cookies.get('token'))
    if (!state.token) {
      state.token = this.$cookies.get('token')
    }
  },
  setTest (state, test) {
    state.test = test
  }
}
export const actions = {
  nuxtServerInit (store, context) {
    // store.commit('setToken', '31131313')
    console.log('nuxtServerInit', Object.keys(context))
    // if (req.session.user) {
    //   commit('user', req.session.user)
    // }
  }
}
