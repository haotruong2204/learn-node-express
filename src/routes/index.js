const newsRouter = require('./news')
const siteRouter = require('./site')
const courseRouter = require('./course')

function route(app) {
  app.use('/tin-tuc', newsRouter)
  app.use('/khoa-hoc', courseRouter)
  app.use('/', siteRouter)
}

module.exports = route
