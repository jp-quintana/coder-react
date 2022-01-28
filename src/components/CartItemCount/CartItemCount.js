const CartItemCount = ({ item, onAdd, onSubstract}) => {

  const handleAdd = () => {
    if (item.cantidad <= item.producto.stock) {
      onAdd(1)
    }
  }

  return (
    <div className="carrito__cantidad-elementos">
      <button className="carrito__agregar" onClick={handleAdd}>
        ^
      </button>
      <p>{item.cantidad}</p>
      <button className="carrito__reducir" onClick={() => onSubstract(1)}>
        ^
      </button>
    </div>
  )
}

export default CartItemCount
