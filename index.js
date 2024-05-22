
const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");
const http = require("http");

(async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  fs.writeFile(
    path.resolve(__dirname, "arr.json"),
    JSON.stringify(data),
    "utf-8",
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
  console.log(1);
})();

const server = http.createServer(async(req, res) => {
    const url = req.url;
    const method = req.method;
res.writeHead(200, {'Content-Type': 'appLication/json'});

    if(url === "/arr.json" && method === "GET"){
      const jsonData = await fs.readFile("./arr.json", "utf-8");
      res.end(jsonData);
        
    } else {
      res.end("Not Found");
    }

 })
 server.listen(3000);