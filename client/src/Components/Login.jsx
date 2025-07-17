import React from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <h2>Login Page</h2>
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Login;
