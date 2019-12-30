import React from 'react';
import Styled from './Loading.styles';

export default function Loading() {
  return(
    <Styled.Loading>
      <Styled.Icon />
      <Styled.Text>Loading...</Styled.Text>
    </Styled.Loading>
  )
}
