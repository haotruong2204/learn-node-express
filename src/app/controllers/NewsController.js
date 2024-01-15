const Course = require('../models/Course')

class NewsController {
  index(req, res) {
    Course.find({})
      .then((courses) => {
        res.json(courses)
      })
      .catch((err) => {
        res.status(400).json({ error: 'ERROR!!!' })
      })
  }

  show(req, res) {
    res.send('NEWS DETAIL!!!')
  }
}

module.exports = new NewsController()
