import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.span`
  background: ${({theme,value}) => theme.styles[value]};
  border-radius: 0.2em;
  color: white;
  display: inline-flex;
  font-size: 0.9rem;
  margin-right: 0.4em;
  padding: 0.3em 0.6em;
`;

const MusicStyle = ({value, children}) => (
  <StyledWrapper value={value}>
    {children}
  </StyledWrapper>
);

MusicStyle.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default MusicStyle;