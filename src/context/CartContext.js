import { createContext, useState } from 'react'

export const context = createContext()

const { Provider } = context

const CartContext = ({children}) => {

  const [carrito, setCarrito] = useState([])
  const [cantidadCarrito, setCantidadCarrito] = useState(0)

  const addItem = (producto, cantidad) => {

    let indice = isInCart(producto.sku)

    if (indice === -1) {
      setCarrito([...carrito, { producto, cantidad }])
      setCantidadCarrito(cantidadCarrito + cantidad)
    } else {
      let updateCart = [...carrito]
      updateCart[indice].cantidad += cantidad
      setCarrito(updateCart)
      setCantidadCarrito(cantidadCarrito + cantidad)
    }
  }

  const removeItem = item => {
    setCantidadCarrito(cantidadCarrito - item.cantidad)
    const indice = isInCart(item.producto.sku);
    let updateCart = [...carrito]
    updateCart.splice(indice, 1);
    setCarrito(updateCart)
  }

  const clear = () => {
    setCarrito([])
  }

  const isInCart = sku => {
    let item = carrito.find(item => item.producto.sku === sku)
    return carrito.indexOf(item)
  }

  const valorContexto = {
    carrito,
    cantidadCarrito,
    addItem,
    removeItem,
    clear
  }

  return (
    <Provider value={valorContexto}>
      {children}
    </Provider>
  )

}

export default CartContext
