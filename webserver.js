var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
//app.use(serveStatic("./Work/UnravelBs"));
app.use(serveStatic("./"));
app.listen(5100);
console.log("Node.js web server is listening at port 5100...");