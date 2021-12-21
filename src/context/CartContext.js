import { createContext, useState } from 'react'

export const context = createContext()

const { Provider } = context

const CartContext = ({children}) => {

  const [valor, setValor] = useState({nombre: 'jp'})
  const valorContexto = {valor, setValor}

  return (
    <Provider value={valorContexto}>
      {children}
    </Provider>
  )

}

export default CartContext
