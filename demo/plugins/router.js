export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    console.log('plugin-router')
    next()
  })
}
