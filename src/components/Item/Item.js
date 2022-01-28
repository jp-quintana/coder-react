import { useContext } from 'react';
import {NavLink} from 'react-router-dom'

import { context } from '../../context/CartContext'

import ItemCount from '../ItemCount/ItemCount'

const Item = ({ product }) => {

  const contexto = useContext(context);

  const handleOnAdd = (unidad) => {
    contexto.addItem(product, unidad)
  }

  return (
    <div className="productos__item">
      <NavLink to={`/producto/${product.sku}`}className="productos__enlace">
        <div className="productos__imagen-contenedor">
          <img src={product.img1} alt="" className="productos__imagen"></img>
          <img src={product.img2} alt="" className="productos__imagen-bottom"></img>
        </div>
        <ul className="productos__info">
          <li className="productos__nombre">{product.tipo} <span>{product.modelo}</span> {product.color}</li>
          <li className="productos__precio">${product.precio}</li>
        </ul>
      </NavLink>
      <ItemCount stock={product.stock} onAdd={handleOnAdd} initial={1}/>
    </div>
  )
}

export default Item
