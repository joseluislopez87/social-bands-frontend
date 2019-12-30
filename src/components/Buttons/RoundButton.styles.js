import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const Styled = {
  Link: StyledLink,
  Image,
}

export default Styled;
