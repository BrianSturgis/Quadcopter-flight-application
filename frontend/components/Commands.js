import socket from '../socket';

function useSocket() {
  const [status, updateStatus] = useState('DISCONNECTED');
  
    socket.on('status', message => {
		console.log('message from socket');
		updateStatus(message);
  });
  return status;
}

const DroneState = () => {
  const status = useSocket();
  
  return (
    <div>
      <p>Status: {status} </p> 
    </div>
  );
};