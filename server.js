const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

server.use(express.static('public'))

server.set('view engine', 'html')

nunjucks.configure('views', {
    express: server,
    noCache: true
})

server.get('/', function(req, res) {
    return res.render('index')
})

server.listen(8000, function() {
    console.log(' = Server online = ')
})