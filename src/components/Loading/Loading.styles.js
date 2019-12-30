import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`

const Loading = styled.div`
  margin: auto;
`;

const Icon = styled.div`
  animation: 1.5s ${fadeIn} infinite ease-in-out;
  background-image: url('/icons/loading.svg');
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  height: 50px;
  width: 106px;
`;

const Text = styled.div`
  color: #656464;
  margin-top: 1em;
  text-align: center;
`;

const Styled = {
  Loading,
  Icon,
  Text,
}

export default Styled;
