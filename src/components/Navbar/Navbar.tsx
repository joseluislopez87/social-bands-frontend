import "bulma";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props: any) => {
  return(
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma logo" />
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/login/" className="button is-primary">Login</Link>
            <Link to="/user/" className="button is-light">User</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
