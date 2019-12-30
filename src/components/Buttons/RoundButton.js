import React from 'react';
import PropTypes from 'prop-types';

import Styled from './RoundButton.styles';

export default function RoundButton({to, icon, children}) {
  return(
    <Styled.Link
      to={to}
      aria-label={children}
    >
      <Styled.Image src={icon} alt='' />
    </Styled.Link>
  );
}

RoundButton.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
