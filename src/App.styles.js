import styled from 'styled-components';

const AppContainer = styled.div`
background: ${props => props.theme.appBackground};
display: flex;
flex-direction: column;
margin: 0 auto;
max-width: 800px;
min-height: 100vh;
`;

const Content = styled.main`
box-sizing: border-box;
display: ${({showNotifications}) => showNotifications ? 'none' : 'flex'};
flex: 1;
flex-direction: column;
margin: 1rem;
`;

export { AppContainer, Content };