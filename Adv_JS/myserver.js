import fs from "fs/promises";
import http from "node:http"

const server = http.createServer((res,req)=>{
    res.statusCode=200

    res.end("Hello World!")
});
server.listen(3000)

fs.appendFile('mynewfile1.txt', 'Hello content!', function () {
    // console.error(err)
    console.log('Saved!');
});









