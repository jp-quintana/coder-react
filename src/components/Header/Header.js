import {NavLink} from 'react-router-dom'

import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header class="header">
      <div class="header-grid">
        <div class="logo">
          <NavLink class="logo__link" to="/categoria/coleccion">
            <img class="logo__nombre" src='/img/logo1 b.png' alt="logo flaakko" />
          </NavLink>
        </div>
        <Nav/>
      </div>
    </header>
  )
}

export default Header;
