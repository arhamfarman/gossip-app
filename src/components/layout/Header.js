import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Link to="/" className="navbar-brand">
            {branding}
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {" "}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/gossip/add" className="nav-link">
                Add Gossip
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "Gossip App",
};

Header.prototype = {
  branding: PropTypes.string.isRequired,
};

export default Header;
