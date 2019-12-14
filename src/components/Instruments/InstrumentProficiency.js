import React from 'react';
import styled from 'styled-components';
import { find } from 'lodash';

import { proficiencies } from 'data';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.4em;
`;

const Star = styled.img`
  height: 15px;
  width: 15px;
`;

const InstrumentProficiency = ({proficiency}) => {
  const starsCount = proficiency + 1;
  const proficiency_infos = find(proficiencies, {id: proficiency});

  let stars = [];
  for (let i = 0; i < starsCount; i++) {
    stars.push(
      <Star key={i} src='/icons/star.svg' />);
  }

  return(
    <Wrapper title={proficiency_infos.name}>
      {stars}
    </Wrapper>
  )
}

export default InstrumentProficiency;