import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">LifeSports</Link>
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Post New Workout</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar