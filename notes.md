Color Scheme: 

Red - #ee534f
White - #fffffff
Light Grey Border Lines - #eeeeee
Light Grey - #939393
Dark Grey - #706e6f


handleLoginSubmit:

    /* fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userName: this.state.userName, password: this.state.password})
    }).then(results => {
      return results.json();
    }).then(data => { 
      if (data === false) {
        console.log("Incorrect Password")
        this.setState({loginMessage: "Incorrect Password Try Again"})
      } else if (data === true) {
        console.log("Welcome")
        this.setState({loginMessage: "Welcome!"})
      } else {
        this.setState({loginMessage: "User Not Found"})
      }
    }) */

/* handleLoginSubmit(e) {

    e.preventDefault();
  
    fetch('/users/' + this.state.userName, { 
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(results => {
        return results.json();
      }).then(data => {
        if (data == "") {
          console.log("User Not Found")
          this.setState({loginMessage: "User Not Found"})
        } else if (data[0].password !== this.state.password) {
          console.log("Incorrect Password")
          this.setState({loginMessage: "Incorrect Password Try Again"})
        } else {
          this.setState({
            userName: data[0].username,
            password: data[0].password,
            loggedIn: true,
            loginMessage: "Welcome!"
          })
          console.log(this.state)
        }
      })
}  */


/* // Listen to POST requests to /users.
app.get('/users/:userName', function(req, res) {
  // Get sent data.
  var user = req.params.userName;
  //var password = req.body.password
  var dbquery = 'SELECT username, password FROM user WHERE username=?' 
  // Do a MySQL query.
  var query = connection.query(dbquery, user, function(err, result){
    if (err) throw err;
    console.log(result);
    res.json(result)
  })
  
}); */