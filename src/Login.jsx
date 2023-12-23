// Login.js

import React from 'react';

const Login = () => {
  return (
    <div className="Login">
      <h1>Your in the Login Page</h1>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Enter Email..." required />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" required />
      <br />
      <button type="submit">Submit</button>
    </div>
  );
};

export default Login;
