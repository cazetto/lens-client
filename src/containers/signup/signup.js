import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { navigate } from '@reach/router';
import SignupForm from 'components/signup-form';
import { SIGNUP_MUTATION } from './mutation';
import { setToken } from 'helpers/authManager';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const { email, password, name } = formData;

  const onCompleted = async data => {
    const { token } = data.signup;
    setToken(token);
    navigate('/');
  };

  const submit = mutation => {
    const { name, email, password } = formData;
    if ((name, email, password)) {
      mutation();
    }
  };

  return (
    <Mutation
      mutation={SIGNUP_MUTATION}
      variables={{ email, password, name }}
      onCompleted={data => onCompleted(data)}
    >
      {(mutation, { loading, error }) => (
        <SignupForm
          onChange={setFormData}
          onSubmit={() => {
            submit(mutation);
          }}
          loading={loading}
          error={error}
        />
      )}
    </Mutation>
  );
};

export default Signup;
