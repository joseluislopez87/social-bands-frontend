import styled from 'styled-components';
import { rem, em } from 'polished';

const paddings = {
  default: `${em(8)}`,
  small: `${em(8)} ${em(14)}`,
  large: `${em(14)}`,
}

const appearances = {
  default: {
    color: 'white',
    background: '#ff512f',
    border: '0',
  },
  secondary: {
    color: 'black',
    background: '#f1e9e9',
    border: '0',
  },
  ghost: {
    color: 'white',
    background: 'none',
    border: '2px solid white',
  }
}

const Button = styled.button`
  background: ${({appearance}) => appearances[appearance].background};
  border: ${({appearance}) => appearances[appearance].border};
  border-radius: ${em(4)};
  color: ${({appearance}) => appearances[appearance].color};
  font-size: ${rem(15)};
  padding: ${props => paddings[props.size]};
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  &:disabled {
    opacity: 0.6;
  }
`;

const Styled = {
  Button,
}

export default Styled;
