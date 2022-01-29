import { useState } from 'react';

import './ItemCount.css'

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
    <>
    <div className="item-count">

        <button className="item-count__botones" onClick={handleMinus}>
        -
        </button>
        <p className="item-count__numero">{unidad}</p>
        <button className="item-count__botones" onClick={handleAdd}>
        +
        </button>
        <button className="item-count__botones" onClick={() => onAdd(unidad)} type='button'>
        Agregar a carrito
        </button>

    </div>
    </>
  )
}

export default ItemCount
