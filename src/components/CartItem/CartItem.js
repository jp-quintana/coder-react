const CartItem = ({ item }) => {
  console.log(item)
  return (
    <tr class="carrito__fila">
      <td class="carrito__producto">
        <img src={item.producto.img1} alt="" class="carrito__imagen"></img>
        <div class="carrito__info">
          <p class="carrito__nombre">{item.producto.tipo} {item.producto.modelo}</p>
          <div class="carrito__desplegado">
            <p>Color: {item.producto.color}</p>
          </div>
          <p data-id="" class="carrito__eliminar">remover</p>
        </div>
      </td>
      <td class="carrito__cantidad">
        <div class="carrito__cantidad-elementos">
          <p data-id="" class="carrito__agregar">
            ^
          </p>
          <p>{item.cantidad}</p>
          <p data-id="" class="carrito__reducir">
            ^
          </p>
        </div>
      </td>
      <td class="carrito__subtotal">0</td>
    </tr>
  )
}

export default CartItem
