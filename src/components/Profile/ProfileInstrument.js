import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { find } from 'lodash';

import { instruments as instrumentsData } from 'data';
import InstrumentIcon from 'components/Instruments/InstrumentIcon';
import InstrumentProficiency from 'components/Instruments/InstrumentProficiency';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  width: 25%;
`;

const Name = styled.div`
  font-size: ${rem(13)};
  margin-top: 0.5em;
  text-align: center;
`;

const ProfileInstrument = ({instrument_id, proficiency}) => {
  const instrument = find(instrumentsData, {id: instrument_id});

  return(
    <Wrapper>
      <InstrumentIcon instrument={instrument} size={80} />
      <Name>{instrument.display_name}</Name>
      <InstrumentProficiency proficiency={proficiency} />
    </Wrapper>
  )
}

export default ProfileInstrument;