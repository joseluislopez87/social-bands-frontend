import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`

const LoadingWrapper = styled.div`
  margin: auto;
`;

const LoadingIcon = styled.div`
  animation: 1.5s ${fadeIn} infinite ease-in-out;
  background-image: url('/icons/loading.svg');
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  height: 50px;
  width: 106px;
`;

const LoadingText = styled.div`
  color: #656464;
  margin-top: 1em;
  text-align: center;
`;

export default function Loading() {
  return(
    <LoadingWrapper>
      <LoadingIcon />
      <LoadingText>Loading...</LoadingText>
    </LoadingWrapper>
  )
}
