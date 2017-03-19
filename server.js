const express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.use(express.static('build'));

app.listen(port, function() {
  console.log('server started on ' + port);
});
