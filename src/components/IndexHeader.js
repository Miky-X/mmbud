import React from 'react';
import { Link } from 'gatsby';
import config from '../../config';

export default function Footer() {
  return (
    <header id="header2">
      <h1>{config.heading}</h1>
      <p>{config.subHeading}</p>
      <div className='LinkPage'>
        <div class='container red topBotomBorderOut'>
          <Link to='About'><a>O nas</a></Link>
          <Link to='Air'><a>Osuszanie</a></Link>
          <Link to='#'><a>Współpraca</a></Link>
          <Link to='Portfolio'><a>Realizacje</a></Link>
          <Link to='Contact'><a>Kontakt</a></Link>
        </div>
      </div>
    </header>
  );
}
