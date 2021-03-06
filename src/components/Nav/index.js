import React from "react";

function Nav() {
  return (

    <div>
      <nav className="site-header sticky-top py-1">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="py-2 d-none d-md-inline-block" href="/">Home</a>
          <a className="py-2 d-none d-md-inline-block" href="/contact">Contact</a>
          <a className="py-2 d-none d-md-inline-block" href="/projects">Portfolio</a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
