import styled from 'styled-components';
import { rem } from 'polished';

const Message = styled.div`
  margin-left: ${props => props.self ? 'auto' : '0'};
  width: 80%;
`;

const Container = styled.div`
  background: ${props => props.self ? '#dd2476' : 'white'};
  border-radius: 0.4em;
  color: ${props => props.self ? 'white' : 'black'};
  padding: 0.75em;
`;

const Infos = styled.div`
  color: #6d6d6d;
  font-size: ${rem(14)};
  margin: 0.25em 0 1em 0;
`;

const Styled = {
  Message,
  Container,
  Infos,
}

export default Styled;
