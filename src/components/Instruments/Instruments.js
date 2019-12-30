import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Instruments.styles';

import { instruments as instrumentsData } from 'data';
import InstrumentIcon from './InstrumentIcon';

const Instruments = ({ items, size = 25 }) => (
  <Styled.Instruments>
    {
      items.map(item => {
        const instrument = instrumentsData.find(x => x.id === item.instrument_id);

        return(
          <InstrumentIcon
            key={item.id}
            size={size}
            instrument={instrument}
          />
        );
      })
    }
  </Styled.Instruments>
)

Instruments.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Instruments;