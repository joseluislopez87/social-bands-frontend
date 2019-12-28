import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EmptyText = styled.div`
  color: ${({theme}) => theme.colors.inactive};
  margin: 3rem 1rem;
  text-align: center;
`;

export const LatestTime = styled.div`
  color: ${({theme}) => theme.colors.inactive};
  font-size: 0.9rem;
`;

export const Unreads = styled.div`
  background: ${({theme}) => theme.colors.gradient};
  border-radius: 9px;
  color: white;
  font-size: 0.9rem;
  margin-top: 0.1em;
  padding: 0.2em 0.5em;

  &:empty {
    display: none;
  }
`;

export const InfosWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;