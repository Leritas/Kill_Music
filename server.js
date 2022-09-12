const express = require('express')
const app = express()
const port = 80

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database/main.db')

db.serialize(() => {
  db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
      console.log(row.id + ": " + row.info);
  });
});

db.close();

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

//Routes for main url

app.get('/', (req, res) => {
  res.render('index', { title: 'Kill Music' })
})





//Routers for server

const itemsRouter = require('./routes/items')
app.use('/items', itemsRouter)


//Server start

app.listen(port, () => console.log(`App listening on port ${port}!`))