import {NavLink} from 'react-router-dom'

import CartWidget from '../CartWidget/CartWidget';

import './Nav.css'

const Nav = () => {
  return (
    <>
      <nav className="navegacion">
        <a className="navegacion__enlace" href="pages/404.html">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </a>
        <div className="navegacion__enlace">
          <button type="button" className="navegacion__sign-in-modal" data-toggle="modal" data-target="#sign-in-modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </button>
        </div>
        <CartWidget/>
      </nav>
      <nav className="navegacion2">
          <NavLink className="navegacion2__enlace" to="/categoria/remeras">Remeras</NavLink>
          <NavLink className="navegacion2__enlace" to="/categoria/buzos">Buzos</NavLink>
          <NavLink className="navegacion2__enlace" to="/categoria/accesorios">Accesorios</NavLink>
      </nav>
    </>
  )
}

export default Nav
