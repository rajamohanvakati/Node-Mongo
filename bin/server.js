import http from 'http' ;
import app from '../index' ;

const port = 8080  ;
const server = http.createServer(app);

server.listen(port) ; 
server.on('listening', onListening);

function onListening() {
console.log('Listening on port ' + server.address().port);
}