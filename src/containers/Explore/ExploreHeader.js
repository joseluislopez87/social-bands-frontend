import React, { useState } from 'react';
import Button from 'components/Buttons/Button';

import Styled from './ExploreHeader.styles';
import { HeaderTitle } from 'styled/Headings';

export default function ExploreHeader() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = e => {
    e.preventDefault();
    setShowFilters(!showFilters);
  }

  return(
    <Styled.ExploreHeader>
      <HeaderTitle>Look for jammers</HeaderTitle>
      <Styled.Form>
        <Styled.DistanceSelector>
          <option>5km around</option>
          <option>10km around</option>
          <option>20km around</option>
        </Styled.DistanceSelector>
        <Styled.Search
          type='search'
          value='Barcelona, Spain'
        />
        <Button
          handleClick={toggleFilters}
          fullWidth
          appearance='ghost'
          style={{marginTop: '0.5em'}}
        >Filter results</Button>
        {
          showFilters && 'filters'
        }
      </Styled.Form>
    </Styled.ExploreHeader>
  )
}
