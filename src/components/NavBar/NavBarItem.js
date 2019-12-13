import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  align-items: center;
  color: ${({theme}) => theme.colors.inactive};
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 0.85rem;
  height: 100%;
  justify-content: center;
  text-decoration: none;

  &.active {
    background: ${({theme}) => theme.colors.gradient};
    background-clip: text;
    color: ${({theme}) => theme.colors.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Image = styled.img`
  margin-bottom: 0.3rem;
  width: 32px;
`;

export default function NavBarItem({to, icon, children}) {
  const [isActive, setActive] = useState(false);

  const inactiveIcon = `/icons/nav/${icon}.svg`;
  const activeIcon = `/icons/nav/${icon}-active.svg`;

  return(
    <StyledNavLink
      to={to}
      isActive={(match) => {
        match ? setActive(true) : setActive(false);

        if (!match) return false;
        else return true;
      }}
    >
      <Image
        src={isActive ? activeIcon : inactiveIcon}
        alt=''
      />
      {children}
    </StyledNavLink>
  )
}

NavBarItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}