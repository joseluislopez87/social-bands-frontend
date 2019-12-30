import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Message.styles';

export default function Message({sent_at, self, children}) {
  return(
    <Styled.Message self={self}>
      <Styled.Container self={self} >
        {children}
      </Styled.Container>
      <Styled.Infos>{sent_at}</Styled.Infos>
    </Styled.Message>
  )
}

Message.propTypes = {
  sent_at: PropTypes.string.isRequired,
  self: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
