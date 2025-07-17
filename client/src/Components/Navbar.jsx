// src/Components/Navbar.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, login, logout } = useAuth();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', backgroundColor: '#333', color: '#fff', alignItems: 'center' }}>
      <h2>E-Mart</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#mobiles" style={linkStyle}>Mobiles</a>
        <a href="#watch" style={linkStyle}>Watches</a>
        <a href="#tv" style={linkStyle}>TVs</a>
        <a href="#men" style={linkStyle}>Men</a>
        <a href="#women" style={linkStyle}>Women</a>
      </div>
      <div>
        {user ? (
          <>
            <span style={{ marginRight: '10px' }}>{user.displayName}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={login}>Sign In with Google</button>
        )}
      </div>
    </nav>
  );
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontWeight: 'bold'
};

export default Navbar;
