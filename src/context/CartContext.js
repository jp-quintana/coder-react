import { createContext, useState } from 'react'

export const context = createContext()

const { Provider } = context

const CartContext = ({children}) => {

  const [carrito, setCarrito] = useState([])
  const [cantidad, setCantidad] = useState(0)

  const addItem = (producto, cantidad) => {
    setCarrito([...producto])
  }

  const removeItem = (sku) => {

  }

  const clear = () => {
    setCarrito([])
  }

  const isInCart = () => {
    
  }

  const valorContexto = {
    carrito,
    cantidad,
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
