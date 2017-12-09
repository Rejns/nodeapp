const express = require('express')
const app = express()

app.get('*', function(req, res){
  res.send({ data: ["one", "two"]});
});

app.listen(3000, function () {
  console.log('Nodeapp port: 3000!')
})