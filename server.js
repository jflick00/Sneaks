var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var exjwt = require('express-jwt'); 

var app = express();

// Set up connection to database.
var connection = mysql.createConnection({
port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'Applemike93',
  database: 'sneaks_DB',
});

// Connect to database.
connection.connect();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

const jwtMW = exjwt({
  secret: 'my secret'
}); 

app.post('/addshoe', function(req, res) {
  var userid = req.body.userId;
  var shoeid = req.body.shoeId;
  var dbquery = "INSERT INTO posts (user_id, shoe_id) VALUES (?,?)"

  var query = connection.query(dbquery, [userid, shoeid], function(err, result) {
    if (err) throw err
    res.json({
      success: true,
      message: "Added!"
    })
  })


})
app.post('/users', function(req, res) {

  var user = req.body.userName;
  var password = req.body.password;

  var dbquery = "INSERT IGNORE INTO user (username, password) VALUES (?,?)"

  //var dbquery = 'INSERT INTO user (username, password) VALUES(?,?)'

  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, function(err, hash) {

    var query = connection.query(dbquery, [user, hash], function(err, result){
      if (result.warningCount === 0) {
        res.json({
          success: true,
          err: null
        })
      } else {
        res.json({
          success: false,
          err: "User Already Exists"
        })
      }
    })

  })

});

app.get('/filtershoes/:brand/:color/:type', function(req, res) {
  var brand = req.params.brand;
  var color = req.params.color;
  var type = req.params.type; 

  console.log(brand, color, type)
  var dbquery = 'SELECT * FROM shoe WHERE brand = ? AND primary_color = ? AND gender = ?'

  var query = connection.query(dbquery, [brand, color, type], function(err, result) {
    console.log(result)
    res.json(result)
  })
})

app.get('/allshoes', function(req, res) {
  
  var dbquery = 'SELECT * FROM shoe'

  var query = connection.query(dbquery, function(err, result) {
    res.json(result)
  })
})

app.post('/login', function(req, res) {
 
  var user = req.body.username;
  var password = req.body.password;
  var dbquery = 'SELECT u.user_id, username, password, p.post_id, p.shoe_id, style_number FROM user u LEFT JOIN posts p ON p.user_id = u.user_id LEFT JOIN shoe s ON s.shoe_id = p.shoe_id WHERE username = ?';

  var query = connection.query(dbquery, user, function(err, result){

    //console.log(result[0].password)

    if (result == '') {
      console.log("user not found")
      res.json(err);
    } 

    else {

      const confirm = bcrypt.compareSync(password, result[0].password)

      if (confirm === true) {
        let token = jwt.sign({ userid: result[0].user_id, username: user }, 'my secret', {expiresIn: 60000}); 
        res.json({
          success: true,
          err: null,
          token,
          result
        })
      } 
      
      else {
        res.status(401).json({
          success: false,
          token: null,
          err: 'Password is incorrect'
        })
      }

    } 
  });
});

app.get('/shoes/:userid', function(req, res) {
  var userid = req.params.userid
  var dbquery = 'SELECT user_id, p.post_id, p.shoe_id, style_number FROM posts p LEFT JOIN shoe s ON s.shoe_id = p.shoe_id WHERE user_id = ?'

  var query = connection.query(dbquery, userid, function(err, result) {
    res.json(result)
  })
})

app.get('/', jwtMW, (req, res) => {
  res.send('You are authenticated')
})

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send(err);
  } else {
    next(err);
  }
});

app.listen(3001, function() {
  console.log('Sneaks app listening on port 3001!');
});

/* app.post('/login', function(req, res) {
 
  var user = req.body.username;
  var password = req.body.password;
  var dbquery = 'SELECT user_id, username, password FROM user WHERE username=?';

  var query = connection.query(dbquery, user, function(err, result){

    //console.log(result[0].password)

    if (result == '') {
      console.log("user not found")
      res.json(err);
    } 

    else {

      const confirm = bcrypt.compareSync(password, result[0].password)

      if (confirm === true) {
        let token = jwt.sign({ userid: result[0].user_id, username: user }, 'my secret', {expiresIn: 60000}); 
        res.json({
          success: true,
          err: null,
          token
        })
      } 
      
      else {
        res.status(401).json({
          success: false,
          token: null,
          err: 'Password is incorrect'
        })
      }

    } 
  });
}); */