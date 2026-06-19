// This is the entry point of our Server.
// npm init
const http = require('http')
const fs = require('fs')

//Create a Server
const myServer = http.createServer((req, res) => {
      //Implement APIs
     // console.log(req)
    switch(req.url) {
        case "/":
            fs.readFile('index1.html', "utf8", (htmlErr, htmlData) => {
                if (htmlErr) {
                  res.writeHead(500, { "Content-Type": "text/plain" });
                  res.end("Error reading HTML file");
                  return;
                }
          
                fs.readFile('style.css', "utf8", (cssErr, cssData) => {
                  if (cssErr) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Error reading CSS file");
                    return;
                  }
          
                  const finalHtml = htmlData.replace(
                    "</head>",
                    `<style>${cssData}</style></head>`
                  );
          
                  res.writeHead(200, { "Content-Type": "text/html" });
                  res.end(finalHtml);
                });
              });
            break
        case "/about":
            res.end('This is the about page')
            break
        case "/courses":
            res.end('This is the courses page')
            break
        default:
            res.end('Page Not found.')
            break
    }
})

// Port Number
myServer.listen(8000, () => {
    console.log('Server Started!')
})