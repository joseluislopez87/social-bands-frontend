import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Field} from 'formik';

export const TextField = styled(Field)`
  background: white;
  border: 0;
  border-radius: 0.4em;
  padding: 0.75em;
`;

const FormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

const Label = styled.label`
  margin-bottom: 0.3em;
`;

const Informations = styled.div`
  color: #585858;
  font-size: 0.8rem;
  margin-top: 0.5em;

  &:empty {
    display: none;
  }
`;

export const FormGroup = ({
  id,
  label,
  type,
  informations,
  children
}) => (
  <FormGroupWrapper>
    <Label htmlFor={id}>{label}</Label>
    <TextField
      id={id}
      type={type}
      name={id}
    />
    {children}
    <Informations>{informations}</Informations>
  </FormGroupWrapper>
);

FormGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  informations: PropTypes.string,
  children: PropTypes.string,
}

export const FloatingSubmitButton = styled.button`
  background: ${({theme}) => theme.colors.secondary};
  border-radius: 0.3em;
  border: 0;
  bottom: 90px;
  box-shadow: ${({theme}) => theme.shadows.normal};
  color: white;
  left: 50%;
  padding: 0.8em 1em;
  position: absolute;
  transform: translateX(-50%);

  &:disabled {
    opacity: 0.7;
  }
`;