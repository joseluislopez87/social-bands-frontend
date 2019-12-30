import React from 'react';
import PropTypes from 'prop-types';
import Styled from './Card.styles';

export default function Card({
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
}) {
  return(
    <Styled.Card
      rounded={rounded}
      displayed={displayed}
    >
      { url && <Styled.CoverLink to={url} aria-label={urlLabel} /> }
      <Styled.ImageWrapper roundImg={roundImg} displayed={displayed}>
        <Styled.Image src={image} alt='' />
      </Styled.ImageWrapper>
      <Styled.Infos>
        <Styled.Name>
          {title}
        </Styled.Name>
        <Styled.Text>{text}</Styled.Text>
        {slot}
      </Styled.Infos>
      <Styled.Children>
        {children}
      </Styled.Children>
    </Styled.Card>
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
