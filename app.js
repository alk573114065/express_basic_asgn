// require packages used in the project
const express = require('express')
const app = express()
const port = 3000


// express-handlebars 
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))


// data 

const btnpages = {
  home: {
    router: '',
    button: '回到首頁',
    title: '首頁'
  },
  about: {
    router: 'about',
    button: 'About',
    title: 'About'
  },
  portfolio: {
    router: 'portfolio',
    button: 'Portfolio',
    title: 'Portfolio'
  },
  contact: {
    router: 'contact',
    button: 'contact',
    title: 'Contact'
  }
}

// Object.values() 取得property value 


app.get('/', (req, res) => {
  res.render('index', { home: btnpages.home, btnpages: Object.values(btnpages), text: btnpages.home })
})

app.get('/about', (req, res) => {
  res.render('index', { home: btnpages.home, btnpages: Object.values(btnpages), text: btnpages.about })
})

app.get('/portfolio', (req, res) => {
  res.render('index', { home: btnpages.home, btnpages: Object.values(btnpages), text: btnpages.portfolio })
})

app.get('/contact', (req, res) => {
  res.render('index', { home: btnpages.home, btnpages: Object.values(btnpages), text: btnpages.contact })
})


// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})