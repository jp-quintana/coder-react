import { useContext } from 'react'
import {NavLink} from 'react-router-dom'

import { context } from '../../context/CartContext'

const CartWidget = () => {

  const resultado = useContext(context);
  console.log(resultado)

  return (
    <NavLink to="/cart" class="navegacion__enlace" href="pages/carrito.html">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
    </NavLink>
  )
}

export default CartWidget
