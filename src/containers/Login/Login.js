import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { FormGroup } from 'styled/Form';

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

export default function Login({ handleLogin }) {

  return(
    <Formik
      initialValues={
        {
          username: 'zealotux@gmail.com',
          password: 'zealotux@gmail.com',
        }
      }
      validationSchema={validationSchema}
      onSubmit={() => handleLogin()}
    >
      {
        ({errors, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <FormGroup
              type='text'
              id='username'
              label='Username'
              placeholder='Username'
              hideLabel
            >
              {errors.username}
            </FormGroup>
            <FormGroup
              type='password'
              id='password'
              label='Password'
              placeholder='Password'
              hideLabel
            >
              {errors.password}
            </FormGroup>
            <input type='submit' value='Log In' />
          </form>
        )
      }
    </Formik>
  )
}