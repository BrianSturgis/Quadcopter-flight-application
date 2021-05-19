import DroneState from '../components/DroneState';
import Commands from '../components/Commands';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-family: 'Operator Mono', monospace;
    font-weight: 900;
    font-size: 1.9rem;
    background:#1C6CFD;
  }
  * {
    font-family: 'impact', monospace;
    box-sizing: border-box;
  }
  h2 {
    text-align: center;
  }
`;

const PageStyles = styled.div`
  max-width: 570px;
  margin: 0 auto;
	padding: 1.5%;
`;

const IndexPage = () => (
  <PageStyles>
    <GlobalStyle />
    <Commands />
    <DroneState />
  </PageStyles>
);

export default IndexPage;