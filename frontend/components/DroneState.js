
const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  return (
    <div>
      <p> Status: </p>
      
    </div>
  );
};

export default DroneState;