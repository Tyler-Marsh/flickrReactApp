import React from 'react'
//export default App;
import {NavLink} from 'react-router-dom'
// make a nav stateless functional component

const Nav = () => {
  return (
    <div>
        <nav className="main-nav">
          <ul>
            <li>
              <span><NavLink to="/">Mountains</NavLink></span>
            </li>
            <li>
              <span><NavLink to="/plains">Plains</NavLink></span>
            </li>
            <li>
              <span><NavLink to="/islands">Islands</NavLink></span>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Nav