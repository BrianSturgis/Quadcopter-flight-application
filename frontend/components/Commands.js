import styled from 'styled-components';
import socket from '../socket';

const CommandGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  border: 1px solid black;
  grid-gap: 6px;
  button {
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.05);
    border: 0;
    // background: #fe2c70;
    border: 8px solid transparent;
    color: black;
    font-size: 1rem;
    position: relative;
    &:active {
      top: 2px;
    }
    &:focus {
      outline: 0;
      border-color: #ffc600;
    }
    &.takeoff {
			font-size: 1.5rem;
      background: #41c7ff;
    }
    &.land {
			font-size: 1.5rem;
			border: 4px solid #4CAF50; /* Green */
			border-radius: 2px;
      // background: #00ff00;
    }
    &.emergency {
      background: yellow;
			
      text-transform: uppercase;
      color: black;
    }
    &.rotate {
      background: #00fff9;

      color: black;
    }
    &.height {
      background: #fff;
      color: black;
    }
    span.symbol {
      display: block;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
	

  .center {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
    button:last-child {
      grid-column: span 2;
    }
  }
  h2 {
    grid-column: 1 / -1;
    background: #ffc600;
    margin: 0;
    font-size: 1.2rem;
    text-align: center;
    padding: 0.9rem;
    color: black;
  }

`;

function sendCommand(command) {
  return function() {
    console.log(`Sending the command ${command}`);
    socket.emit('command', command);
  };
}

const amount = 100;
const Commands = () => (
  <CommandGrid>
    <button className="rotate" onClick={sendCommand('ccw 90')}>
      <span className="symbol">rotate CCW</span> 90°
    </button>
    <button onClick={sendCommand(`forward ${amount}`)}>
      <span className="symbol">↑</span> forward {amount}cm
    </button>
    <button className="rotate" onClick={sendCommand('cw 15')}>
      <span className="symbol">rotate CW</span> 15°
    </button>
    <button onClick={sendCommand(`left ${amount}`)}>
      <span className="symbol">←</span> left {amount}cm
    </button>
    <div className="center">
      <button className="takeoff" onClick={sendCommand('takeoff')}>
        Take Off
      </button>
      <button className="land" onClick={sendCommand('land')}>
        Land
      </button>
      <button className="emergency" onClick={sendCommand('emergency')}>
        <h2>OH SHIT</h2>
      </button>
    </div>
    <button onClick={sendCommand(`right ${amount}`)}>
      <span className="symbol">→</span>
      right {amount}cm
    </button>
    <button className="height" onClick={sendCommand(`up ${amount}`)}>
      <span className="symbol">⤒ up</span> {amount}cm
    </button>
    <button onClick={sendCommand(`back ${amount}`)}>
      <span className="symbol">↓</span> back {amount}cm
    </button>
    <button className="height" onClick={sendCommand(`down ${amount}`)}>
      <span className="symbol">⤓ down</span> {amount}cm
    </button>
    <button onClick={sendCommand('flip l')}>Flip Left</button>
    <button onClick={sendCommand('flip f')}>Flip Forward</button>
    <button onClick={sendCommand('flip r')}>Flip Right</button>
    <button onClick={sendCommand('go 25 25 25 25')}>Go 25 25 25 25</button>
    <button onClick={sendCommand('flip b')}>Flip Back</button>
    <button onClick={sendCommand('curve 100 100 100 150 250 350 50')}>
      Curve!
    </button>
  </CommandGrid>
);

export default Commands;
