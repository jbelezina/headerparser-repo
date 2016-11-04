"use strict";

let express = require('express'),
    bodyParser = require('body-parser'),
    useragent = require('useragent'),
    portNo = process.env.PORT || 8080,
    app = express();
    
app.use(bodyParser.urlencoded());

app.get('/', function (req, res) {
  
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var language = req.headers['accept-language']
  var agent = useragent.parse(req.headers['user-agent']);
  var software = agent.os.toString();
  
  
  res.json({
    "ipaddress" : ip,
    "language" : language,
    "software" : software
  });

});

app.listen(portNo, function () {
  console.log('Example app listening on env port or 8080');
});