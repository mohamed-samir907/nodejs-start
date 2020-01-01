const http = require('http');
const fs = require('fs');

const routes = JSON.parse(fs.readFileSync('./routes.json', "utf-8"));

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    routes.find(function(route) {
        if (req.url == route.name) {
            var controller = new (require('./' + route.controller));
            var method = route.method;
            controller.call(method, res);
            res.end();
        }
    });

});

server.listen(3001, function() {
    console.log('listen to 3001');
});