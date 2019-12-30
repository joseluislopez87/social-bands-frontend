import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Notification.styles';

export default function Notification({ data }) {
  return(
    <Styled.Notification>
      {data.type}
    </Styled.Notification>
  )
}

Notification.propTypes = {
  data: PropTypes.object.isRequired,
}
