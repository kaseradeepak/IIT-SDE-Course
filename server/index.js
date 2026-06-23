// This is the entry point of our Server.
// npm init
const http = require('http')
const fs = require('fs')
const urlPackage = require('url')

//Create a Server
const myServer = http.createServer((req, res) => {
      //Implement APIs
     console.log(req.url)
    const parsedUrl = urlPackage.parse(req.url, true)
    console.log(parsedUrl)
    switch(parsedUrl.pathname) {
        case "/":
            fs.readFile('index.html', "utf8", (htmlErr, htmlData) => {
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
            let courseName = parsedUrl.query.name
            console.log(courseName)
            
            if(courseName === 'java') {
              res.end('This is Java Course Page')
            } else if(courseName == 'ai') {
              res.end('This is AI Course Page')
            } else {
              res.end('Course not found.')
            }
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

// /courses?name=java => Return Java Course Page
// /courses?name=ai => Return AI Course Page

// Express JS