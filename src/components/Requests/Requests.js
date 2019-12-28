import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import Button from 'components/Buttons/Button';
import timeFormat from 'utils/date';

import Fetcher from 'utils/Fetcher';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptyText = styled.div`
  color: ${({theme}) => theme.colors.inactive};
  margin: 3rem 1rem;
  text-align: center;
`;

const ActionsWrapper = styled.div`
  & > * + * {
    margin-left: 0.3em;
  }
`;

const Requests = () => {
  return(
    <Fetcher request='http://localhost:3004/requests?for_user_id=0&_sort=created_at&_order=desc'>
      { ({ data }) => (
        <Wrapper>
        {
          data.length > 0 ?
            data.map(request => (
              <Card
                key={request.id} 
                image={request.image}
                title={request.title}
                text={timeFormat(request.created_at)}
                roundImg
              >
                <ActionsWrapper>
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
                </ActionsWrapper>
              </Card>
              )
            )
            : <EmptyText>No pending request.</EmptyText>
        }
      </Wrapper>
      ) }
    </Fetcher>
  )
}

export default Requests;