const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const appDir = __dirname;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".zip": "application/zip"
};

const server = http.createServer((request, response) => {
  const requestPath = request.url.split("?")[0].split("#")[0];
  const safePath = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "");
  const filePath = path.join(appDir, safePath);

  if (!filePath.startsWith(appDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    const extension = path.extname(filePath);
    const headers = {
      "Content-Type": contentTypes[extension] || "application/octet-stream"
    };

    if (extension === ".zip") {
      headers["Content-Disposition"] = `attachment; filename="${path.basename(filePath)}"`;
    }

    response.writeHead(200, headers);
    response.end(content);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Food Truck AI app is running at http://localhost:${port}`);
});
