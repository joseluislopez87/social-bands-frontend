import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  background: ${({theme}) => theme.headerBackground};
  border-radius: ${({showNotifications}) => showNotifications ? '0' : '0 0 1rem 1rem'};
  color: white;
  display: flex;
  flex: ${({showNotifications}) => showNotifications ? '1' : '0'};
  flex-direction: column;
  min-height: ${({showNotifications}) => showNotifications ? '100%' : '60px'};
  position: relative;
  width: 100%;
  z-index: ${({showNotifications}) => showNotifications ? '1000' : 'auto'};
`;

const HeaderNav = styled.nav`
  align-items: center;
  display: flex;
  padding: 0.5rem;
  width: 100%;
`;

const LogoLink = styled(Link)`
  display: flex;
  padding: 0.5rem;
`;

const Logo = styled.img`
  height: 25px;
  width: auto;
`;

const Badge = styled.div`
  margin-left: auto;
`;

const Children = styled.div`
  display: flex;
  padding: 0.5rem 1rem 1rem 1rem;
  width: 100%;

  &:empty {
    display: none;
  }
`;

const Styled = {
  Header,
  HeaderNav,
  LogoLink,
  Logo,
  Badge,
  Children,
}

export default Styled;
