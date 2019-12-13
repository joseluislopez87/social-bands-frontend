import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledLink = styled(Link)`
  align-items: center;
  background: white;
  border-radius: 100%;
  box-shadow: 2px 2px 6px #02020224;
  display: flex;
  height: 2.75rem;
  justify-content: center;
  width: 2.75rem;
`;

const Image = styled.img`
  height: auto;
  width: 60%;
`;

const RoundButton = ({to, icon, children}) => (
  <StyledLink
    to={to}
    aria-label={children}
  >
    <Image src={icon} alt='' />
  </StyledLink>
);

RoundButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default RoundButton;