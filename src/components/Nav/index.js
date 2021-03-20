import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (

    <div>
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <Link className="py-2 d-none d-md-inline-block" to="/">Home</Link>
          <Link className="py-2 d-none d-md-inline-block" to="/contact">Contact</Link>
          <Link className="py-2 d-none d-md-inline-block" to="/projects">Portfolio</Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
