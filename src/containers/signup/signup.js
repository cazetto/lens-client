import React, { useState } from 'react';
import SignupForm from 'components/signup-form';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <SignupForm />
    </div>
  );
}

export default Signup;
