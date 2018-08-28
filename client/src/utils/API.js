export default {
    getUsername: function() {
        app.get('/users/:userName', function(req, res) {
        // Get sent data.
        var user = req.params.userName;
        //var password = req.body.password
        var dbquery = 'SELECT username, password FROM user WHERE username=?'
        // Do a MySQL query.
        var query = connection.query(dbquery, user, function(err, result){
          if (err) throw err;
          console.log(result);
          return (result)
        })
      });
    } 
}