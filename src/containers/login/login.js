import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { navigate } from '@reach/router';
import LoginForm from 'components/login-form';
import { LOGIN_MUTATION } from './mutation';
import { setToken } from 'helpers/authManager';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onCompleted = async data => {
    const { token } = data.login;
    setToken(token);
    navigate('/');
  };

  const submit = mutation => {
    const { email, password } = formData;
    if ((email, password)) {
      mutation();
    }
  };

  return (
    <Mutation
      mutation={LOGIN_MUTATION}
      variables={{ email, password }}
      onCompleted={data => onCompleted(data)}
    >
      {(mutation, { loading, error }) => (
        <LoginForm
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

export default Login;
