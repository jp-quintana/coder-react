import { createContext, useState } from 'react'

export const context = createContext()

const { Provider } = context

const CartContext = ({children}) => {

  const [carrito, setCarrito] = useState([])
  const [carritoCantidad, setCarritoCantidad] = useState(0)
  const [carritoPrecio, setCarritoPrecio] = useState(0)

  const addItem = (producto, cantidad) => {

    let indice = isInCart(producto.sku)


    if (indice === -1) {
      setCarrito([...carrito, { producto, cantidad }])
    } else {
      let updateCart = [...carrito]
      updateCart[indice].cantidad += cantidad
      setCarrito(updateCart)
    }
    setCarritoCantidad(carritoCantidad + cantidad)
    setCarritoPrecio(carritoPrecio + producto.precio * cantidad)
  }

  const removeItem = item => {
    const indice = isInCart(item.producto.sku);
    let updateCart = [...carrito]
    updateCart.splice(indice, 1);
    setCarrito(updateCart)
    setCarritoCantidad(carritoCantidad - item.cantidad)
    setCarritoPrecio(carritoPrecio - item.producto.precio * item.cantidad)
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
    carritoCantidad,
    carritoPrecio,
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
