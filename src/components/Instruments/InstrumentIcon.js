import React from 'react';
import PropTypes from 'prop-types';

import Styled from './InstrumentsIcon.styles';

export default function InstrumentIcon({ instrument, size = 30 }) {

  return(
    <Styled.Wrapper
      size={size}
      title={instrument.display_name}
      aria-label={instrument.display_name}
    >
      <Styled.Icon
        instrument={instrument.name}
        size={size}
      />
    </Styled.Wrapper>
  )
}

InstrumentIcon.propTypes = {
  instrument: PropTypes.object.isRequired,
  size: PropTypes.number,
}
