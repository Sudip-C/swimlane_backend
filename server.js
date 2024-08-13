const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router( 'db.json');
const middlewares = jsonServer.defaults();

// Enable CORS for all routes
server.use(cors());

// Set default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// Use default router
server.use(router);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
