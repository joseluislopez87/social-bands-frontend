import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {PageTitle} from 'styled/Headings';
import {FormGroup, FloatingSubmitButton} from 'styled/Form';

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required')
});

const SaveProfile = (values) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
  }, 400);
}

const ProfileEdit = () => {

  return(
    <>
      <PageTitle>Edit profile</PageTitle>
      <Formik
        initialValues={
          {
            displayName: 'Mathieu',
            email: 'zealotux@gmail.com',
          }
        }
        validationSchema={ValidationSchema}
        onSubmit={(values, {setSubmitting}) => {
          SaveProfile(values);
          setSubmitting(false);
        }}
      >
        {({
          errors,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup
              id='displayName'
              label='Display name'
              type='text'
            >
              {errors.displayName}
            </FormGroup>

            <FormGroup
              id='email'
              label='Email address'
              type='email'
              informations='You will have to confirm your email address again.'
            >
              {errors.email}
            </FormGroup>

            <FloatingSubmitButton
              type='submit'
              disabled={isSubmitting}
            >
              Save modifications
            </FloatingSubmitButton>
          </form>
        )}
      </Formik>
  </>
  )
}

export default ProfileEdit;