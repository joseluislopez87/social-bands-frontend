import React, { useState } from 'react';
import Button from 'components/Buttons/Button';

import Styled from './ExploreHeader.styles';
import { HeaderTitle } from 'styled/Headings';
import { FormattedMessage } from 'react-intl';

const instrumentsOptions = [
  { value: 'bass', label: 'Bass' },
  { value: 'guitar-electric', label: 'Electric guitar' },
  { value: 'Drums', label: 'Drums' },
];

const stylesOptions = [
  { value: 'rock', label: 'Rock' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'blue', label: 'Blues' },
];

const customStyles = {
  option: (provided) => ({
    ...provided,
    color: 'black',
  })
}

export default function ExploreHeader() {
  const [showFilters, setShowFilters] = useState(true);
  const [location, setLocation] = useState('Barcelona, Spain');
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);

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
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <Button
          handleClick={toggleFilters}
          fullWidth
          appearance='ghost'
          style={{marginTop: '0.5em'}}
        >
          {
            showFilters ?
            <FormattedMessage id='components.ExploreHeader.filtersButton.on' />
            :
            <FormattedMessage id='components.ExploreHeader.filtersButton.off' />
          }
        </Button>
        {
          showFilters &&
            <Styled.Filters>
              <Styled.Select
                value={selectedInstruments}
                onChange={value => setSelectedInstruments(value)}
                options={instrumentsOptions}
                isMulti
                placeholder='Filter instruments'
                closeMenuOnSelect={false}
                styles={customStyles}
              />
              <Styled.Select
                value={selectedStyles}
                onChange={value => setSelectedStyles(value)}
                options={stylesOptions}
                isMulti
                placeholder='Filter styles'
                closeMenuOnSelect={false}
                styles={customStyles}
              />
            </Styled.Filters>
        }
      </Styled.Form>
    </Styled.ExploreHeader>
  )
}
