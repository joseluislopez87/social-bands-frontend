import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1em 0;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5em;
  margin-top: 0;
`;

const Children = styled.div`
  display: flex;
  overflow-y: scroll;
`;

const ProfileSection = ({title, children}) => {
  return(
    <Wrapper>
      <Title>{title}</Title>
      <Children>
        {children}
      </Children>
    </Wrapper>
  )
}

ProfileSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default ProfileSection;