import React from 'react';
import { navigate } from '@reach/router';

import { removeToken } from 'helpers/authManager';

const Logout = () => {
  removeToken();
  navigate('/');
  return <div>Logout</div>;
};

export default Logout;
