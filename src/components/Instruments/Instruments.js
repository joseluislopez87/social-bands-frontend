import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {instruments as instrumentsData} from 'data';

const Wrapper = styled.div`
  display: flex;
  padding: 0.4rem 0 0.2rem 0;

  & > * + * {
    margin-left: 0.2em;
  }
`;

const Icon = styled.img`
  height: auto;
  width: 30px;
`;

const Instruments = ({items}) => (
  <Wrapper>
    {
      items.map(id => {
        const instrument = instrumentsData.find(x => x.id === id);
        const iconPath = `/icons/instruments/${instrument.icon}.svg`;

        return <Icon key={id} src={iconPath} alt={instrument.name} />
      })
    }
  </Wrapper>
)

Instruments.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Instruments;