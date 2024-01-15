const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect()

// Static file
app.use(express.static(path.join(__dirname, 'public')))

// Body parser, middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

// HTTP logger
app.use(morgan('combined'))

// Tempalte engine
app.engine(
  'hbs',
  handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs',
  }),
)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes init
route(app)

app.listen(port, () => {
  console.log(`App app listening on port ${port}`)
})
