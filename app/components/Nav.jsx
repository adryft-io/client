import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <div className="four columns">
    <ul>
      <li><Link to="/manifesto">manifesto</Link></li>
      <li><Link to="/about">about</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/formulae/create/gmail">Create Gmail Formula</Link></li>
      <li><Link to="/sign-in">Sign In</Link></li>
      <li><Link to="/select">Select</Link></li>
    </ul>
  </div>
);

export default Nav;
