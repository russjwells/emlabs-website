import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <IndexLink to='/' style={{ textDecoration: 'none' }} className='MenuItem Title'>
          EMLABS
        </IndexLink>
        <Link to='/lab' style={{ textDecoration: 'none' }} className='MenuItem'>
          Lab
        </Link>
        <Link to='/team' style={{ textDecoration: 'none' }} className='MenuItem'>
          Team
        </Link>
        <Link to='/clients' style={{ textDecoration: 'none' }} className='MenuItem'>
          Clients
        </Link>
        <Link to='/contact' style={{ textDecoration: 'none' }} className='MenuItem'>
          Contact
        </Link>
      </div>
    );
  }
}

export default Footer;
