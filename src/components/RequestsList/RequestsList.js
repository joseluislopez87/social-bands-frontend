import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import Button from 'components/Buttons/Button';
import {find} from 'lodash';

import {users, profiles} from 'data';
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

const RequestsList = ({items}) => {
  return(
    <Wrapper>
      {
        items.length > 0 ?
          items.map(item => {
            // get item's user data:
            const user = find(users, {id: item.from_user_id});
            const profile = find(profiles, {user_id: user.id})

            return(
              <Card
                key={item.id} 
                image={profile.picture}
                title={profile.display_name}
                text={timeFormat(item.created_at)}
                url={`/profile/${user.username}`}
                urlLabel={`Go to ${profile.display_name}'s profile`}
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

RequestsList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default RequestsList;