import React from 'react';
import styled from 'styled-components';
import { find } from 'lodash';

import { instruments as instrumentsData } from 'data';
import InstrumentIcon from 'components/Instruments/InstrumentIcon';
import InstrumentProficiency from 'components/Instruments/InstrumentProficiency';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5em;
  width: 80px;
`;

const Name = styled.div`
  font-size: 0.7rem;
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