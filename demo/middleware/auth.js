export default function (context) {
  console.log('midd', Object.keys(context))
  context.store.commit('getToken')
  const token = context.store.state.token
  if ((!token && context.route.path !== '/login') || context.route.path === '/logout') {
    context.$cookies.removeAll()
    context.redirect('/login')
  } else if (token && context.route.path === '/login') {
    context.redirect('/')
  }
}
