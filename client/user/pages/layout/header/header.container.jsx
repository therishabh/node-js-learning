import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="header global-header">
      <div className="logo">
        <IndexLink to="/" className="nav-link home" activeClassName="active">Get My Artist</IndexLink>
      </div>
      <ul className="header-links">
        <li className="header-link-item">
          <Link to="/all-artists/" className="nav-link" activeClassName="active">Artists</Link>
        </li>
        <li className="header-link-item">
          <Link to="/post/" className="nav-link" activeClassName="active">Post Your Requirement</Link>
        </li>
        <li className="header-link-item">
        <Link to="/register/" className="nav-link" activeClassName="active">Register with us</Link>
        </li>
        </ul>
    </nav>
  );
};

Header.propTypes = {
};

export default Header;
