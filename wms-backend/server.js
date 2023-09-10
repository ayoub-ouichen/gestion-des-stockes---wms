const http = require('http');
const app = require('./index');
const server = http.createServer(app);
const port = 3642;
server.listen(port);