

const { Client } = require('ssh2');

const conn = new Client();
conn.on('ready', () => {
  console.log('Client :: ready');
  conn.shell((err, stream) => {
    if (err) throw err;
    stream.on('close', () => {
      console.log('Stream :: close');
      
    }).on('data', (data) => {
      console.log({data: data + ' '});
    });
    stream.write('pwd\n');
    setTimeout(() => {
      stream.write('echo $HOME\n')
    }, 3000);
    setTimeout(() => {
      stream.write('exit\n')
    }, 6000);
  });
}).connect({
    host: "localhost",
    port: 9999,
    username: "u0_379",
    password: "1248"
});
