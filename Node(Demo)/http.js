const http = require('http');//


function hostServer() {//מרימים שרת 
  http.Server((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8001, () => console.log('Server is up, making a HTTP call..'));//זה המספר פורט שלנו

  // console.log('Server is up, making a HTTP call..');
}

function callServer() {
  http.get('http://localhost:8001/test', resp => {//עושים קריאה לשרת 
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        console.log('Response completed: ' + data);
    });
  });
}

module.exports = {
  hostServer,
  callServer
};
