// host address; default set to localhost. to change value, use dotenv
var host = process.env.HOST || "localhost";
//  port; default set to 5000. to change value, use dotenv
var port = process.env.PORT || 5000;

// initialize cors-anywhere
var cors_proxy = require("cors-anywhere");

// create server using cors-anywhere
cors_proxy
  .createServer({
    originWhitelist: [], // leave blank to whitelist all domains
    // to use localhost domains, you must set http security to false
    httpProxyOptions: {
      secure: false,
    },
  })
  // sets server to listen to host:port (default is localhost:5000)
  .listen(port, host, function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
