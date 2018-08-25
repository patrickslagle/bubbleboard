const express = require('express');
const bodyParser = require('body-parser'); //to access req.body
const path = require("path");

//create express server
const app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname + './../'))

//create server routers
const router = require('./router');
router(app);

//
app.get('/*', function(req, res) {
  console.log(__dirname)

  res.sendFile(path.join(__dirname, './../'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(3000, () => console.log('backend server up! this is run on port 3000, but visit 8080 for the dev server'))
