import { useContext } from 'react';

import { context } from '../../context/CartContext'

const CartItem = ({ item }) => {

  const contexto = useContext(context);

  const handleOnRemove = item => {
    contexto.removeItem(item)
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
        <div className="carrito__cantidad-elementos">
          <p className="carrito__agregar">
            ^
          </p>
          <p>{item.cantidad}</p>
          <p className="carrito__reducir">
            ^
          </p>
        </div>
      </td>
      <td className="carrito__subtotal">0</td>
    </tr>
  )
}

export default CartItem
