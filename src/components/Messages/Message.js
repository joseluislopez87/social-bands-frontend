import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.div`
  margin-left: ${props => props.self ? 'auto' : '0'};
  width: 80%;
`;

const MessageContainer = styled.div`
  background: ${props => props.self ? '#dd2476' : 'white'};
  border-radius: 0.4em;
  color: ${props => props.self ? 'white' : 'black'};
  padding: 0.75em;
`;

const Infos = styled.div`
  color: #6d6d6d;
  font-size: ${rem(14)};
  margin: 0.25em 0 1em 0;
`;

export default function Message({sent_at, self, children}) {
  return(
    <Wrapper self={self}>
      <MessageContainer self={self} >
        {children}
      </MessageContainer>
      <Infos>{sent_at}</Infos>
    </Wrapper>
  )
}

Message.propTypes = {
  sent_at: PropTypes.string.isRequired,
  self: PropTypes.bool,
  children: PropTypes.node.isRequired,
}