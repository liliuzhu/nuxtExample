export const state = () => {
  return {
    name: '小明'
  }
}
export const mutations = {
  setName (state, pol) {
    console.log('user', this) // this 为store
    state.name = pol
  }
}
// export default { // 等同于以上注册
//   namespaced: true,
//   state: () => ({ name: '小明' }),
//   mutations: {
//     setName (state, pol) {
//       state.name = pol
//     }
//   }
// }
