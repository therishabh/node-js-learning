import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/all-artists/" activeClassName="active">Artists</Link>
      {" | "}
      <Link to="/about-us/" activeClassName="active">About</Link>
      {" | "}
      <Link to="/post/" activeClassName="active">Post</Link>
      {" | "}
      <Link to="/register/" activeClassName="active">Register</Link>
    </nav>
  );
};

Header.propTypes = {
};

export default Header;
