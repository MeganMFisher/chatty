express = require('express');
var bodyParser = require('body-parser');
var app = express();
var messages = [];

app.use(express.static('assets'))
app.use(bodyParser.json())


app.get('/messages', function (req, res, next){
    res.status(200).json({ messages: messages });
})

app.post('/messages', function (req, res, next) {
  messages.push({message: req.body.message, username: req.body.username, time: new Date()});
  res.status(200).json({messages: messages})
});


app.listen(3000, function(){
    console.log('listening on port 3000');
})

