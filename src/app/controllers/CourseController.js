const Cource = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {
  show(req, res, next) {
    Cource.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseToObject(course) })
      })
      .catch(next)
  }
}

module.exports = new CourseController()
