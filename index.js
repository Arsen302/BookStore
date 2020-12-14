const http = require('http');

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hi! This is a book-store!')
})

server.listen(port, () => {
    console.log(`It's a life! In ${port} port!`)
})