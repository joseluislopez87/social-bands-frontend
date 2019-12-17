import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCard,
  CoverLink,
  ImageWrapper,
  Image,
  Infos,
  Name,
  Text,
  Children,
} from './Card.styles';

const Card = ({
  image,
  title,
  text,
  url,
  urlLabel,
  slot, 
  children,
  rounded = false,
  displayed,
  roundImg = false,
}) => {
  return(
    <StyledCard
      rounded={rounded}
      displayed={displayed}
    >
      { url && <CoverLink to={url} aria-label={urlLabel} /> }
      <ImageWrapper roundImg={roundImg} displayed={displayed}>
        <Image src={image} alt='' />
      </ImageWrapper>
      <Infos>
        <Name>
          {title}
        </Name>
        <Text>{text}</Text>
        {slot}
      </Infos>
      <Children>
        {children}
      </Children>
    </StyledCard>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  slot: PropTypes.node,
  url: PropTypes.string,
  urlLabel: function(props, propName) {
    if(props['url'] && props[propName] === undefined) {
      return new Error('urlLabel is required.')
    }
  },
  children: PropTypes.node,
  rounded: PropTypes.bool,
  condensed: PropTypes.bool,
  roundImg: PropTypes.bool,
  displayed: PropTypes.string,
}

export default Card;