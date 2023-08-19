const http = require("http");

const fs = require("fs");

function readFile(response, file) {
  fs.readFile(file, function (erro, data) {
    console.log(erro);
    response.end(data);
  });
}

const myServer = http.createServer((req, res) => {
  if (req.url === "/pet1") {
    readFile(res, "pets1.json");
  } else if (req.url === "/pet2") {
    readFile(res, "pets2.json");
  }else {
    res.end(JSON.stringify({error:true,
  message:"Data not found..."}))
  }
});

myServer.listen(3030, () => {});
