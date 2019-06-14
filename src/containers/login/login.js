import React, { useState } from 'react';
import LoginForm from 'components/login-form';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;
