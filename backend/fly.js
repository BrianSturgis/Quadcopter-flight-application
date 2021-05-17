const dgram = require('dgram');
const wait = require('waait');
const commandDelays = require('./commandDelays');

const PORT = 8889;
const HOST = '192.168.10.1';

const drone = dgram.createSocket('udp4');
drone.bind(PORT);

const droneState = dgram.createSocket('udp4');
droneState.bind(8890);

drone.on('message', message => {
  console.log(`🤖 : ${message}`);
  // io.sockets.emit('status', message.toString());
});

function handleError(err) {
  if (err) {
    console.log('ERROR');
    console.log(err);
  }
}

// const commands = ['command', 'battery?', 'takeoff', 'land'];
const commands = ['command', 'battery?'];

let i = 0;

drone.send('command', 0, 'command'.length, PORT, HOST, handleError);

// function below is for testing purpose when in a bench
async function go() {
  const command = commands[i];
  const delay = commandDelays[command];
  console.log(`running command: ${command}`);
  drone.send(command, 0, command.length, PORT, HOST, handleError);
  await wait(delay);
  i += 1;
  if (i < commands.length) {
    return go();
  }
  console.log('done!');
}

go();

// droneState.on('message',
//   throttle(state => {
//     const formattedState = parseState(state.toString());
//     io.sockets.emit('droneState', formattedState);
//   }, 100)
// );

// io.on('connection', socket => {
//   socket.on('command', command => {
//     console.log('command Sent from browser');
//     console.log(command);
//     drone.send(command, 0, command.length, PORT, HOST, handleError);
//   });

//   socket.emit('status', 'CONNECTED');
// });


// http.listen(6767, () => {
//   console.log('Socket io server up and running');
// });

// further explore
// function parseState(state) {
//   return state
//     .split(';')
//     .map(x => x.split(':'))
//     .reduce((data, [key, value]) => {
//       data[key] = value;
//       return data;
//     }, {});
// }