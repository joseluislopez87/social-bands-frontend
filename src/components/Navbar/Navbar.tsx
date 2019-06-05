import "bulma";
import React from "react";

const Navbar = (props: any) => {
  const {
    children,
  } = props;

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
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
