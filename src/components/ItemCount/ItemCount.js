import { useState } from 'react';

const ItemCount = ({ stock, onAdd, initial }) => {

  const [counter, setCount] = useState(1);

  const handleMinus = () => {
    if (counter > initial) {
      setCount(counter - 1);
    }
  }

  const handleAdd = () => {
    if (counter < stock) {
      setCount(counter + 1);
    }
  }

  return (
    <div>
      <p>{counter}</p>
      <div>
        <button onClick={handleMinus}>
        -
        </button>
        <button onClick={handleAdd}>
        +
        </button>
        <button onClick={() => onAdd()} type='button'>
        Agregar a carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount
