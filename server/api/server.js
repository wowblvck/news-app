const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();

const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/api/*": "/$1",
  "/categories/:category": "/categories?value=:category",
}));
server.use(cors());
server.use(router);
server.listen(3001, () => {
  console.log(`News App Server is running on PORT 3001`);
});

module.exports = server;