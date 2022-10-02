const express = require('express')
const router = express.Router()

//константы для авторизации
const cookieParser = require('cookie-parser')
const passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  session = require('express-session'),
  flash = require('connect-flash')

// константы для базы данных
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








passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use(session({ secret: 'you secret key' }))
router.use(flash())
router.use(passport.initialize())
router.use(passport.session())

passport.use( 
  new localStrategy(
    {
      usernameField: 'login',
      passwordField: 'password',
    },
    (user, password, done) => {
      console.log(user,password)
      let todone = ''
      db.serialize(async () => {
        let userdb = await query(`SELECT * FROM users WHERE login = '${user}' `)
        console.log(userdb)
        if (user !== userdb[0]?.login)
        return todone = done(null, false, {
          message: 'User not found',
        })
         else if (md5(password) !== userdb[0]?.password)
        return todone = done(null, false, {
          message: 'Wrong password',
        })
        return todone = done(null, { id: 10, name: 'user', age: 21 })
      })
      return todone
    }
  )
)

router.get('/', (req,res) => {
  res.redirect('/admin/home')
})

router.get('/login', (req, res) => {
  res.render('admin', {auth: false})
})

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/admin/home',
    failureRedirect: '/admin/login',
    failureFlash: true,
  })
)

function checkAuth(req,res) {
    if (!req.user) return res.redirect('/admin/login')
}

router.get('/home', (req, res) => {
  checkAuth(req,res)
  res.render('admin', {auth:true})
})

router.get('/logout', (req,res)  => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/admin/home');
  });
})



module.exports = router