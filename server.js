var express = require('express');
//const server = require('server');
//server(ctx => 'Application is running');

// Create app
var app = express();
const PORT = process.env.PORT || 4000;

app.use(function(req, res, next){
  if(req.headers['x-forwarded-proto'] == 'https'){
    res.redirect('http://' + req.hostname + req.url)
  }
  else{
    next();
  }
});
app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Server running on port ' + PORT);
});
