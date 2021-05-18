import styled from 'styled-components';

const BatteryStyles = styled.div``;
const Battery = props => (
  <BatteryStyles level={props.battery}>
    <span className="batteryLevel">{props.battery}%</span>
  </BatteryStyles>
);

Battery.defaultProps = {
  battery: 'LOADING',
  battery: 20,
};

export default Battery;