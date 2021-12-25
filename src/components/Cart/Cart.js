import { useContext, useState } from 'react';
import {NavLink} from 'react-router-dom'

import { context } from '../../context/CartContext'

const Cart = () => {

  const contexto = useContext(context);
  console.log(contexto.carrito)
  return (
    <main class="main">
      <div class="contenedor">
      {
        contexto.carrito === []
        ?
        <p>El carrito esta vacio</p>
        :
        <section class="carrito">
          <h1>Carrito</h1>
          <table class="carrito__tabla">
            <tbody id="body-carrito" class="carrito__body">
            <tr class="carrito__fila">
            <td class="carrito__producto">
              <img src="" alt="" class="carrito__imagen"></img>
              <div class="carrito__info">
                <p class="carrito__nombre"></p>
                <div class="carrito__desplegado">
                  <p>Color: </p>
                </div>
                <p data-id="" class="carrito__eliminar">remover</p>
              </div>
            </td>
            <td class="carrito__cantidad">
              <div class="carrito__cantidad-elementos">
                <p data-id="" class="carrito__agregar">
                  ^
                </p>
                <p></p>
                <p data-id="" class="carrito__reducir">
                  ^
                </p>
              </div>
            </td>
            <td class="carrito__subtotal"></td>
          </tr>
            </tbody>
          </table>
          <p id="precio-total-carrito" class="carrito__total">Total: $0</p>

          <div class="carrito__boton-container">
            <button id="boton-carrito" type="button" class="carrito__boton">Confirmá compra</button>
          </div>
        </section>
      }
      </div>
    </main>
  )
}

export default Cart
