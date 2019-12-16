import styled from 'styled-components';
import { cover } from 'polished';
import device from 'themes/devices';

import { Link } from 'react-router-dom';

export const StyledCard = styled.div`
  background: white;
  border-radius: ${props => props.rounded ?
    '0.4em' : '0'};
  box-shadow: ${props => props.rounded ?
    '1px 1px 6px #a5a3a336' : '0'};
  display: flex;
  padding: 0.5rem 0.35rem;
  position: relative;

  @media ${device.large} {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  border-radius: ${props => props.roundImg ?
    '100%' : '1.5em'};
  overflow: hidden;
  margin-right: 0.5rem;
  padding-bottom: ${props => props.condensed ?
    '50px' : '75px'};
  position: relative;
  width: ${props => props.condensed ?
    '50px' : '75px'};
`;

export const Image = styled.img`
  left: 0;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

export const Infos = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const Children = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: 0.5rem;
  padding-left: 0.5rem;
  z-index: 50;
`;

export const Name = styled.div`
  color: black;
  font-size: ${props => props.condensed ?
    '0.95rem' : '1.1rem'};
`;

export const Text = styled.div`
  color: ${({theme}) => theme.colors.inactive};
  font-size: ${props => props.condensed ?
    '0.7rem' : '0.9rem'};
  margin-top: 0.1em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CoverLink = styled(Link)`
  ${cover()}
  z-index: 10;
`;
