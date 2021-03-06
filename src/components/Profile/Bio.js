import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1em 0;
`;

export default function Bio({children}) {
  return(
    <Wrapper>
      {children}
    </Wrapper>
  )
}

Bio.propTypes = {
  children: PropTypes.node.isRequired,
}