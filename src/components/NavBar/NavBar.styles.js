import styled from 'styled-components';

const NavBar = styled.nav`
  background: ${({theme}) => theme.navBarBackground};
  bottom: 0;
  box-shadow: 0 0 6px 6px rgba(0,0,0,.03);
  display: flex;
  height: 70px;
  justify-content: space-between;
  left: 0;
  padding: 0 0.5rem;
  position: sticky;
  right: 0;
  z-index: 2000;
`;

const Styled = { NavBar }

export default Styled;
