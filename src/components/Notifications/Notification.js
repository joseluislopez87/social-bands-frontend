import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Wrapper = styled.div`
  background: white;
  border-radius: 0.2rem;
  color: black;
  padding: 0.5em;
  width: 100%;
`;

const Notification = ({ data }) => {
  return(
    <Wrapper>
      {data.type}
    </Wrapper>
  )
}

Notification.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Notification;