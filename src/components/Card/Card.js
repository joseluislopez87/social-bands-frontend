import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Instruments from 'components/Instruments/Instruments';

const Wrapper = styled.div`
  background: white;
  border-radius: ${props => props.condensed ? '0.2em' : '0'};
  display: flex;
  padding: 0.5rem 0.35rem;
  position: relative;
`;

const ImageWrapper = styled.div`
  border-radius: ${props => props.alternateLook ? '20%' : '100%'};
  overflow: hidden;
  margin-right: 0.5rem;
  padding-bottom: ${props => props.condensed ? '50px' : '70px'};
  position: relative;
  width: ${props => props.condensed ? '50px' : '70px'};
`;

const Image = styled.img`
  left: 0;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const InfosWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const ChildrenWrapper = styled.div`
  align-items: ${props => props.childrenColumn ? 'flex-end' : 'center'};
  display: flex;
  flex-direction: ${props => props.childrenColumn ? 'column' : 'row'};
  justify-content: center;
  margin-left: auto;
  margin-right: 0.5rem;
  padding-left: 0.5rem;
  z-index: 50;
`;

const Name = styled.div`
  color: black;
  font-size: ${props => props.condensed ? '0.95rem' : '1.1rem'};
`;

const Text = styled.div`
  color: ${({theme}) => theme.colors.inactive};
  font-size: ${props => props.condensed ? '0.7rem' : '0.9rem'};
  margin-top: 0.1em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MegaLink = styled(Link)`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const Card = ({
  image,
  name,
  text,
  url,
  urlLabel,
  instruments, 
  children,
  childrenColumn = false,
  alternateLook = false,
  condensed = false,
}) => {
  return(
    <Wrapper condensed={condensed}>
      { url && <MegaLink to={url} aria-label={urlLabel} /> }
      <ImageWrapper alternateLook={alternateLook} condensed={condensed}>
        <Image src={image} alt='' />
      </ImageWrapper>
      <InfosWrapper>
        <Name condensed={condensed}>{name}</Name>
        <Text>{text}</Text>
        {instruments && <Instruments items={instruments} />}
      </InfosWrapper>
      <ChildrenWrapper childrenColumn={childrenColumn}>
        {children}
      </ChildrenWrapper>
    </Wrapper>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  urlLabel: PropTypes.string,
  children: PropTypes.node,
  isSearch: PropTypes.bool,
}

export default Card;