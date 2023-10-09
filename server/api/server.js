const jsonServer = require('json-server');

const server = jsonServer.create();

// const { join, resolve } = require('path');
// const { readFileSync } = require('fs');
// const path = resolve(process.cwd());
// const file = readFileSync(join(path, 'db.json'), 'utf-8');
// const db = JSON.parse(file);

const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/api/*": "/$1",
  "/categories/:category": "/categories?value=:category",
}));
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running');
});

module.exports = server;