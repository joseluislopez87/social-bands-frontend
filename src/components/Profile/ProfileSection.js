import React from 'react';
import PropTypes from 'prop-types';

import Styled from './ProfileSection.styles';

export default function ProfileSection({title, children}) {
  return(
    <Styled.ProfileSection>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Children>
        {children}
      </Styled.Children>
    </Styled.ProfileSection>
  )
}

ProfileSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}
