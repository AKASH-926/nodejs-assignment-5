var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  const url = req.url;

  if (url == "/") {
    res.write("");
    res.end();
  } else if (url == "/welcome") {
    res.writeHead(200, {
      "content-type": "text/plain",
    });
    res.write("Welcome to Dominos");
    res.end();
  } else if (url == "/contact") {
    res.writeHead(200, { "content-type": "application/JSON" });
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );

    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Error 404 Page Not Found</h1>");
    res.end();
  }
}

httpServer.listen(8081, () => console.log("server up at 8081"));
module.exports = httpServer;
