import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Computer" activeClassName="active">Computer</NavLink>
              </li>
              <li>
                <NavLink to="/Tablets" activeClassName="active">Tablets</NavLink>
              </li>
              <li>
                <NavLink to="/Dron" activeClassName="active">Dron</NavLink>
              </li>
              <li>
                <NavLink to="/Audio" activeClassName="active">Audio</NavLink>
              </li>
              <li>
                <NavLink to="/Mobile" activeClassName="active">Mobile</NavLink>
              </li>
              <li>
                <NavLink to="/Tv" activeClassName="active">Tv & Home Cinema</NavLink>
              </li>
              <li>
                <NavLink to="/Wearbletech" activeClassName="active">Wearable Tech</NavLink>
              </li>
              <li>
                <NavLink to="/Sale" activeClassName="active">Sale</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      );
}

export default Header
