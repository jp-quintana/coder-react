import { useContext, useState } from 'react';
import {NavLink} from 'react-router-dom'

import { context } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

  const contexto = useContext(context);
  const carrito = contexto.carrito
  return (
    <main class="main">
      <div class="contenedor">
        <section class="carrito">
          <h1>Carrito</h1>
          {
            carrito.length === 0

            ?

            <>
            <p>El carrito está vacio</p>

            <div class="carrito__boton-container">
              <NavLink to="/"><button id="boton-carrito" type="button" class="carrito__boton">Volver a productos</button></NavLink>
            </div>
            </>

            :

            <>
            <table class="carrito__tabla">
              <tbody id="body-carrito" class="carrito__body">
                {carrito.map(item => <CartItem key={item['producto']['sku']} item={item}/>)}
              </tbody>
            </table>

            <p id="precio-total-carrito" class="carrito__total">Total: $0</p>

            <div class="carrito__boton-container">
              <button id="boton-carrito" type="button" class="carrito__boton">Confirmá compra</button>
            </div>
            </>
          }
        </section>
      </div>
    </main>
  )
}

export default Cart
