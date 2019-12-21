import React from 'react'
import styled from 'styled-components';
import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton';

const StyledWrapper = styled(Wrapper)`
  position: relative;
`;

const StyledMenu = styled(Menu)`
  position: absolute;
  right: 0;
  width: 140px;
  background: white;
  border-radius: 0.2em;
  box-shadow: ${({theme}) => theme.shadows.normal};
`;

const MenuItemsWrapper = styled.ul`
  padding: 0;
  margin: 0;
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 0.9rem;
  padding: 0.75em;
`;

export default function Dropdown() {

  const handleSelection = () => {
    console.log('selected');
  }

  return(
    <StyledWrapper
      onSelection={handleSelection}
    >
      <Button>
        <img src='/icons/dots.svg' alt='' />
      </Button>
      <StyledMenu>
        <MenuItemsWrapper>
          <StyledMenuItem>
            See Profile
          </StyledMenuItem>
          <StyledMenuItem>
            Add to Friends
          </StyledMenuItem>
          <StyledMenuItem>
            Block User
          </StyledMenuItem>
        </MenuItemsWrapper>
      </StyledMenu>
    </StyledWrapper>
  )
}