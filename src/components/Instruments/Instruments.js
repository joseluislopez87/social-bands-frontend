import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {instruments as instrumentsData} from 'data';

const Wrapper = styled.div`
  display: flex;
  padding: 0.4rem 0 0.2rem 0;

  & > * + * {
    margin-left: 0.25em;
  }
`;

const IconWrapper = styled.div`
  height: ${({size}) => size ? `${size}px` : '100px'};
  width: ${({size}) => size ? `${size}px` : '100px'};
`;

const Icon = styled.div`
  background-image: url('/icons/instruments.svg');
  background-position: ${({instrument, theme}) => theme.instruments[instrument]};
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;
  transform: scale(${({size}) => size ? size*0.01 : '1'});
  transform-origin: top left;
  /* NEVER change dimensions or the sprite display will break */
  /* use the scale transform to adjust the size of the icon */
  height: 100px;
  width: 100px;
`;

const Instruments = ({items, size = 30}) => (
  <Wrapper>
    {
      items.map(item => {
        const instrument = instrumentsData.find(x => x.id === item.id);

        return(
          <IconWrapper
            key={item.id}
            size={size}
            title={instrument.display_name}
            aria-label={instrument.display_name}
          >
            <Icon
              instrument={instrument.name}
              size={size}
            />
          </IconWrapper>
        );
      })
    }
  </Wrapper>
)

Instruments.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Instruments;