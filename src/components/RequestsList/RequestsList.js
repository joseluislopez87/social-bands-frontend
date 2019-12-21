import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import Button from 'components/Buttons/Button';
import axios from 'axios';
import timeFormat from 'utils/date';


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

const RequestsList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const data = await axios('http://localhost:3004/requests?for_user_id=0&_sort=created_at&_order=desc');
      setRequests(data.data);
    }
    fetchRequests();
  }, []);

  return(
    <Wrapper>
      {
        requests.length > 0 ?
          requests.map(request => {

            return(
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
            );
          })
          :
          <EmptyText>No pending request.</EmptyText>
      }
    </Wrapper>
  )
}

export default RequestsList;