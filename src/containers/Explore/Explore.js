import React, { useState, useEffect } from 'react';

import { Results } from './Explore.styles';

import Card from 'components/Card/Card';
import Instruments from 'components/Instruments/Instruments';

import axios from 'axios';

const Explore = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchResults() {
      axios.get('//localhost:3004/users?_start=0&_end=10')
        .then(response => setResults(response.data))
        .catch(error => console.log(error))
    }
    fetchResults();
  }, []);

  return(
    <>
      <h1>Explore</h1>
      <Results>
        {results.map(result => {

          // display the Card
          return(
            <Card
              key={result.id}
              image={result.profile.picture}
              title={result.profile.display_name}
              url={`/profile/${result.username}`}
              urlLabel={`Go to ${result.profile.display_name}'s profile.`}
              text={result.profile.location}
              slot={<Instruments items={result.profile.instruments} />}
              rounded
            />
          )
        })}
      </Results>
    </>
  );
}

export default Explore;