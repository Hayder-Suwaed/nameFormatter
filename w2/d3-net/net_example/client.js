const net = require('net');
const conn = net.createConnection({ 
    host: '192.168.15.58', // Jamaal's IP
    port: 3000
  });
  conn.setEncoding('utf8'); // interpret data as text
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
 
  conn.on('connect', () => {
    conn.write('Hello from client!');
  });
