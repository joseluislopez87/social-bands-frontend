import React, { useState } from 'react';
import { Select, Box, Button as GButton, Text } from 'grommet';
import { FormClose } from 'grommet-icons';
import Button from 'components/Buttons/Button';

import Styled from './ExploreHeader.styles';
import { HeaderTitle } from 'styled/Headings';

const allInstruments = [
  "bass",
  "guitar-electric",
  "drums",
];

export default function ExploreHeader() {
  const [showFilters, setShowFilters] = useState(false);
  const [pickedInstruments, setPickedInstruments] = useState([]);

  const toggleFilters = e => {
    e.preventDefault();
    setShowFilters(!showFilters);
  }

  const onRemoveInstrument = instrument => {
    const instrumentIndex = allInstruments.indexOf(instrument);
    setPickedInstruments(
      pickedInstruments.filter(selectedInstrument => selectedInstrument !== instrumentIndex)
    );
  };

  const renderSeason = instrument => (
    <GButton
      key={`season_tag_${instrument}`}
      href="#"
      onClick={event => {
        event.preventDefault();
        event.stopPropagation();
        onRemoveInstrument(instrument);
      }}
      onFocus={event => event.stopPropagation()}
    >
      <Box
        align="center"
        direction="row"
        gap="xsmall"
        pad={{ vertical: "xsmall", horizontal: "small" }}
        margin="xsmall"
        background="accent-1"
        round="large"
      >
        <Text size="small" color="white">
          {instrument}
        </Text>
        <Box background="white" round="full" margin={{ left: "xsmall" }}>
          <FormClose
            color="accent-1"
            size="small"
            style={{ width: "12px", height: "12px" }}
          />
        </Box>
      </Box>
    </GButton>
  );

  const renderOption = (option, state) => (
    <Box pad="small" background={state.active ? "active" : undefined}>
      {option}
    </Box>
  );

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
          showFilters &&
            <Styled.Filters>
              <Select
                closeOnChange={false}
                multiple
                value={
                  <Box wrap direction="row" width="full">
                    {pickedInstruments && pickedInstruments.length ? (
                      pickedInstruments.map(index => renderSeason(allInstruments[index]))
                    ) : (
                      <Box
                        pad={{ vertical: "xsmall", horizontal: "small" }}
                        margin="xsmall"
                      >
                        Instruments
                      </Box>
                    )}
                  </Box>
                }
                options={allInstruments}
                selected={pickedInstruments}
                onChange={({ selected: nextSelected }) => {
                  setPickedInstruments([...nextSelected].sort());
                }}
              >
                {renderOption}
              </Select>
            </Styled.Filters>
        }
      </Styled.Form>
    </Styled.ExploreHeader>
  )
}
