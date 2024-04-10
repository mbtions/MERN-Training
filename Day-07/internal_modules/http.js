const http = require('http'); // we need http to create server

const app = http.createServer((request, response)=>{
    console.log("Request received");
    console.log(request.url);
    response.end("<h1>Bye Bye!</h1>");
    // response.closed('Bye Bye!');
    // response.write('End');
    // response.write('Bye');
});
// app has all the functionalities of a server

// How to request?
// you need your app to run on a port, you will listen on a given port.
const port = 1400;
app.listen(port);
// you can also give details like port, host and a callback function to perform some task when running in the listen function
// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });
