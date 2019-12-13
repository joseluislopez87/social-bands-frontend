import React from 'react';

import Instruments from 'components/Instruments/Instruments';
import {instruments} from 'data';

const Explore = () => {
  return(
    <>
      <h1>Explore</h1>
      <Instruments items={instruments} />
    </>
  );
}

export default Explore;