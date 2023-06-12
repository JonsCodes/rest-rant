const http = require('http')

function createServer() {
  return http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1 style='color:red'>Hello Programmers!!!!!!!</h1>")
    res.end()
  })
}

function startServer(server) {
  server.listen(process.env.PORT || 3000, () => {
    console.log('Server is running!!')
  })
}

const server = createServer()
startServer(server)