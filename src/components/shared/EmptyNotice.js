import styled from 'styled-components';

const EmptyNotice = styled.p`
  color: ${({theme}) => theme.colors.inactive};
  text-align: center;
  width: 100%;
`;

export default EmptyNotice;
