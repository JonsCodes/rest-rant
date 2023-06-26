// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

const port = process.env.PORT || 3000
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
  () => {console.log('connected to : ', process.env.MONGO_URI)})


app.get('*', (req, res) => {
    res.render('error404')
  })

app.listen(process.env.PORT)




// // Modules and Globals
// require('dotenv').config()
// const express = require('express')
// const methodOverride = require('method-override')
// const app = express()

// // Express Settings
// app.set('views', __dirname + '/views')
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
// app.use(express.static('public'))
// app.use(express.urlencoded({ extended: true }))
// app.use(methodOverride('_method'))


// // Controllers & Routes
// app.use('/places', require('./controllers/places'))

// app.get('/', (req, res) => {
//     res.render('home')
// })

// app.get('*', (req, res) => {
//     res.render('error404')
// })

// //edit & delete


// // Listen for Connections
// app.listen(process.env.PORT)

