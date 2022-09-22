const express = require('express')
const router = express.Router()


const urlencodedParser = express.urlencoded({ extended: false });

const sqlite3 = require('sqlite3').verbose()
const md5 = require('md5')
const db = new sqlite3.Database('./database/main.db')

const query = (command, method = 'all') => {
  return new Promise((resolve, reject) => {
    db[method](command, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};


router.get('/', (req, res) => {
  res.render('admin', {})
})

router.post('/', urlencodedParser, (req, res) => {
  let authorized = false
  db.serialize(async () => {
    let user = await query(`SELECT * FROM users WHERE login = '${req.body.login}' `)
    if (user[0]?.password == md5(req.body.password)) {
      authorized = true; 
      res.render('admin', { auth: authorized })
    } else {
      res.render('admin', { auth: authorized, say: 'Неверный пароль' })
    }
  })




})

module.exports = router