import { useState } from 'react';

const ItemCount = ({ stock, onAdd, initial}) => {

  const [unidad, setUnidad] = useState(1);

  const handleMinus = () => {
    if (unidad > initial) {
      setUnidad(unidad - 1);
    }
  }

  const handleAdd = () => {
    if (unidad < stock) {
      setUnidad(unidad + 1);
    }
  }

  return (
    <div>
      <p>{unidad}</p>
      <div>
        <button onClick={handleMinus}>
        -
        </button>
        <button onClick={handleAdd}>
        +
        </button>
        <button onClick={() => onAdd(unidad)} type='button'>
        Agregar a carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount
