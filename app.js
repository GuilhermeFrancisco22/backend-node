const http = require("http");
const server = http.createServer(function (req, res) {
  if (req.url === "/data" && req.method == "POST") {
    console.log("Caiu em Data...");
    res.end("Tudo certo por aqui...");
  } else if (req.url === "/singup" && req.method == "POST") {
    var body = "";
    req.on("data", function (data) {
      body += data;
    });
    req.on("end", function () {
      var received = JSON.parse(body);
      console.log(received);
      if (received.email === "guifran@gmail.com") {
        res.end("Email Ok!");
      } else {
        res.end("Verifique o email!");
      }
    });
    return;
  } else if (req.url === "/gravar" && req.method == "POST") {
    res.end("Sem autorizzação!");
    res.statusCode = 401;
  } else {
    res.end("Verifique o método");
  }
});

server.listen(1212, () => {
  console.log("server on..");
});
