const http = require('http');
const fs   = require('fs');
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  if ( request.url.startsWith('/public/css/') ) {
    response.writeHead(200, {
     'Content-Type': 'text/css'
    });
    fs.readFile(`.${request.url}`, null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('file not found');
        } else {
            response.write(data);
        }
        response.end();
    });
  } else if ( request.url.startsWith('/public/js/') ) {
    response.writeHead(200, {
     'Content-Type': 'text/javascript'
    });
    fs.readFile(`.${request.url}`, null, function (error, data) {
        if (error) {
            console.log(error);
            response.writeHead(404);
            respone.write('file not found');
        } else {
            response.write(data);
        }
        response.end();
    });
  } else if ( request.url.startsWith('/public/json/') ) {
    response.writeHead(200, {
     'Content-Type': 'application/json'
    });
    fs.readFile(`.${request.url}`, null, function (error, data) {
        if (error) {
            console.log(error);
            response.writeHead(404);
            respone.write('file not found');
        } else {
            response.write(data);
        }
        response.end();
    });
  } else {
    response.writeHead(200, {
     'Content-Type': 'text/html'
    });
    fs.readFile('./views/index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('file not found');
        } else {
            response.write(data);
        }
        response.end();
    });
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})