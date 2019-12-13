import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import Button from 'components/Buttons/Button';
import {find} from 'lodash';

import {users} from 'data';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptyText = styled.div`
  color: ${({theme}) => theme.colors.inactive};
  margin: 3rem 1rem;
  text-align: center;
`;

const RequestsList = ({items}) => {
  return(
    <Wrapper>
      {
        items.length > 0 ?
          items.map(item => {
            // get item's user data:
            const user = find(users, {id: item.from_user_id});

            return(
              <Card
                key={item.id} 
                image={user.picture}
                name={user.display_name}
                text={item.type}
                url={`/profile/${user.id}`}
                urlLabel={`Go to ${user.display_name}'s profile`}
              >
                <Button handleClick={() => console.log('accept')}>
                  Accept
                </Button>
                <Button
                  secondary
                  handleClick={() => console.log('decline')}
                >
                  Decline
                </Button>
              </Card>
            );
          })
          :
          <EmptyText>No pending request.</EmptyText>
      }
    </Wrapper>
  )
}

RequestsList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default RequestsList;