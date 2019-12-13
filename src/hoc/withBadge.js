import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Badge = styled.div`
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 9px;
  box-sizing: border-box;
  color: white;
  display: flex;
  font-size: 0.9rem;
  height: 1.2rem;
  justify-content: center;
  min-width: 1.2rem;
  padding: 0.05rem 0.3rem;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
`;

const defaultWrapper = 'div';

const defaultOptions = {
  background: '#de2575',
  limit: 99,
}

const withBadge = (
    value,
    wrapper = defaultWrapper,
    options = defaultOptions
  ) =>
    WrappedComponent =>
      class extends React.Component {
        render() {
          const displayedValue = value > options.limit ?
            `${options.limit}+` :
            value;

          const Wrapper = styled(wrapper)`
            position: relative;
          `;
          
          return(
            <Wrapper>
              {
                value > 0 &&
                <Badge background={options.background}>
                  {displayedValue}
                </Badge>
              }
              <WrappedComponent {...this.props} />
            </Wrapper>
          )
        }
      }

withBadge.propTypes = {
  value: PropTypes.number,
  options: PropTypes.object,
  WrappedComponent: PropTypes.node.isRequired,
}

export default withBadge;