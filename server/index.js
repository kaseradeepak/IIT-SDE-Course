// This is the entry point of our Server.
// npm init
const http = require('http')

//Create a Server
const myServer = http.createServer((req, res) => {
      //Implement APIs
})

// Port Number
myServer.listen(8000, () => {
    console.log('Server Started!')
})