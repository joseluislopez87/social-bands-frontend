import React from 'react';

import Styled from './Requests.styles';

import Fetcher from 'utils/Fetcher';
import timeFormat from 'utils/date';

import Card from 'components/Card/Card';
import Button from 'components/Buttons/Button';

export default function Requests() {
  return(
    <Fetcher request='http://localhost:3004/requests?for_user_id=0&_sort=created_at&_order=desc'>
      { ({ data }) => (
        <Styled.Requests>
          {
            data.length > 0 ?
              data.map(request => (
                <Card
                  key={request.id} 
                  image={request.image}
                  title={request.title}
                  text={timeFormat(request.created_at)}
                  url={`/profile/`}
                  urlLabel='See user profile'
                  roundImg
                >
                  <Styled.Actions>
                    <Button
                      handleClick={() => console.log('accept')}
                      condensed
                    >
                      Accept
                    </Button>
                    <Button
                      secondary
                      condensed
                      handleClick={() => console.log('decline')}
                    >
                      Decline
                    </Button>
                  </Styled.Actions>
                </Card>
                )
              )
              : <div>no pending requests</div>
          }
        </Styled.Requests>
      ) }
    </Fetcher>
  )
}
