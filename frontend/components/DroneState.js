import { useState, useEffect } from 'react';
import styled from 'styled-components';
import socket from '../socket';

function useDroneState() {
  const [droneState, updateDroneState] = useState({});
  useEffect(() => {
    socket.on('dronestate', updateDroneState);
    return () => socket.removeListener('dronestate');
  }, []);
  return droneState;
}

function useSocket() {
  const [status, updateStatus] = useState('is 0');
  useEffect(() => {
    socket.on('status', updateStatus);
    return () => socket.removeListener('status');
  }, []);
  return status;
}

const DroneStateStyles = styled.div`
  .status {
    text-align: center;
  }`;

const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  return (
    <DroneStateStyles>
      <p className="status">battery level {status}%</p>
    </DroneStateStyles>
  );
};

export default DroneState;