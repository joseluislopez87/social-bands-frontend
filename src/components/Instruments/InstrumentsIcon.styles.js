import styled from 'styled-components';
import { round } from 'lodash';

const Wrapper = styled.div`
height: ${({size}) => size ? `${size}px` : '100px'};
width: ${({size}) => size ? `${size}px` : '100px'};
`;

const Icon = styled.div`
background-image: url('/icons/instruments.svg');
background-position: ${({instrument, theme}) => theme.instruments[instrument]};
background-repeat: no-repeat;
background-size: cover;
display: inline-block;
transform: scale(${({size}) => size ? round(size*0.01, 2) : '1'});
transform-origin: top left;
/* do not change the dimensions or the sprite display will break */
/* use the scale transform to adjust the size of the icon */
height: 100px;
width: 100px;
`;

const Styled = {
  Wrapper,
  Icon,
}

export default Styled;