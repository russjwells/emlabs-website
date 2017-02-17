import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <IndexLink to='/' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem Title'>
            EMLABS
          </IndexLink>
          <Link to='/lab' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>
            Our Lab
          </Link>
          <Link to='/team' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>
            Our Team
          </Link>
          <Link to='/clients' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>
            Our Clients
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }} activeClassName='ActiveMenuItem' className='MenuItem'>
            Contact Us
          </Link>
      </div>
    );
  }
}

export default Header;
