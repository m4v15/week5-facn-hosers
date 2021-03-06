const handler = require('./handler.js');

//Create object containing our routes and their respective handlers
const routes = {
  '/':handler.homeHandler,
  '404':handler.errorHandler,
  '/assets/main.css': handler.assetsHandler,
  '/assets/main.js': handler.assetsHandler,
  '/assets/render.js': handler.assetsHandler,
  '/requestAPIS': handler.APIHandler
}

//Router function to deal with the routes and pass to appropriate handler
function router(req, res){
  //if the url of the request exists as a key within our routes object then give (req, res) as arguments to corresponding handler function
  if (routes[req.url]){
    routes[req.url](req, res);
  }
  //if not, give it the 404
  else{
    routes[404](req, res);
  }
}

module.exports = router;
