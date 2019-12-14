import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1em 0;
`;

const BioWrapper = styled.div`
  display: flex;
  max-height: ${({extended}) => extended ? 'auto' : '60px'};
  margin-bottom: ${({extended}) => extended ? '0.5em' : '0'};;
  position: relative;
  overflow: hidden;
  width: 100%;

  &:after {
    background-image: linear-gradient(to bottom, rgba(0,0,0,0), #f5f5f5);
    content: '';
    bottom: 0;
    display: ${({extended}) => extended ? 'none' : 'block'};
    height: 30px;
    left: 0;
    position: absolute;
    width: 100%;
  }
`;

const Button = styled.button`
  background: white;
  border: 1px solid lightgray;
  border-radius: 0.3em;
  color: black;
  font-size: 0.9rem;
  margin-left: 50%;
  padding: 0.5em 0.9em;
  transform: translate(-50%);
`;

const Bio = ({children}) => {
  const [extended, setExtended] = useState(false);

  return(
    <Wrapper>
      <BioWrapper extended={extended}>
        {children}
      </BioWrapper>
      <Button
        aria-hidden
        onClick={() => setExtended(!extended)}
        secondary
      >
        {extended ? 'Show less' : 'Read more'}
      </Button>
    </Wrapper>
  )
}

Bio.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Bio;