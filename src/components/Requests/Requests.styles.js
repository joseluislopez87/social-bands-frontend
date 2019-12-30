import styled from 'styled-components';

const Requests = styled.div`
display: flex;
flex-direction: column;
`;

const Actions = styled.div`
& > * + * {
  margin-left: 0.3em;
}
`;

const Styled = {
  Requests,
  Actions,
}

export default Styled;
