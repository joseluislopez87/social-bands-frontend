import React from 'react';
import Styled from './Loading.styles';
import { FormattedMessage } from 'react-intl';

export default function Loading() {
  return(
    <Styled.Loading>
      <Styled.Icon />
      <Styled.Text>
        <FormattedMessage id='application.loading' />
      </Styled.Text>
    </Styled.Loading>
  )
}
