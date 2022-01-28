import {NavLink} from 'react-router-dom'

import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header className="header">
      <div className="header-grid">
        <div className="logo">
          <NavLink className="logo__link" to="/">
            <img className="logo__nombre" src='/img/logo1 b.png' alt="logo flaakko" />
          </NavLink>
        </div>
        <Nav/>
      </div>
    </header>
  )
}

export default Header;
