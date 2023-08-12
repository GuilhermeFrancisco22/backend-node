//1 Importar http
const http = require("http");
//2 Criar Servidor
const myServer = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/products") {
    res.end("<h1>Mostrando produtos</h1>");
  } else if (req.url === "/save") {
    res.end("<h1>Salvando produtos</h1>");
  } else if (req.url === "/delete") {
    res.end("<h1>Apagando produtos</h1>");
  } else if (req.url === "/maca") {
    res.end(
      "<html><img src='https://scfoods.fbitsstatic.net/img/p/maca-red-argentina-unidade-70942/257561.jpg?w=800&h=800&v=no-change&qs=ignore'/>,/html>"
    );
  }else if(req.url === "/banana") {
    res.end(`
    <button>Clique!</button>
    `)
  } else {
    res.end("<h1>Indisponivel</h1>");
  }
});
//3 Abrir porta do servidor
myServer.listen(8080, () => {
  console.log("Olá, Mundo!");
});
