import { useContext } from 'react';

import { context } from '../../context/CartContext'

import CartItemCount from '../CartItemCount/CartItemCount'

const CartItem = ({ item }) => {
  const contexto = useContext(context);

  const handleOnRemove = item => {
    contexto.removeItem(item)
  }

  const handleOnAdd = unidad => {
    let product = item.producto
    contexto.addItem(product, unidad)
  }

  const handleOnSubstract = unidad => {
    contexto.substractItem(item, unidad)
  }

  return (
    <tr className="carrito__fila">
      <td className="carrito__producto">
        <img src={item.producto.img1} alt="" className="carrito__imagen"></img>
        <div className="carrito__info">
          <p className="carrito__nombre">{item.producto.tipo} {item.producto.modelo}</p>
          <div className="carrito__desplegado">
            <p>Color: {item.producto.color}</p>
          </div>
          <p onClick={() => handleOnRemove(item)} className="carrito__eliminar">remover</p>
        </div>
      </td>
      <td className="carrito__cantidad">
        <CartItemCount onAdd={handleOnAdd} onSubstract={handleOnSubstract} item={item}/>
      </td>
      <td className="carrito__subtotal">${item.producto.precio * item.cantidad}</td>
    </tr>
  )
}

export default CartItem
