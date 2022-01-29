import { useContext } from 'react';
import {NavLink} from 'react-router-dom'

import { context } from '../../context/CartContext'

import ItemCount from '../ItemCount/ItemCount'

import './ItemDetail.css'

const Item = ({ product }) => {

  const contexto = useContext(context);

  const handleOnAdd = (unidad) => {
    contexto.addItem(product, unidad)
  }

  return (
    <div className="producto">
      <div className="producto__sticky">
        <div className="producto__info">
          <h1 className="producto__nombre no-margin">{product.modelo}</h1>
          <p className="producto__detalle no-margin">{product.tipo} {product.color}</p>
          <p className="producto__precio">${product.precio}</p>

          <ItemCount stock={product.stock} onAdd={handleOnAdd} initial={1}/>
          <NavLink to="/cart"><button className="producto__boton" type="submit" name="button">Terminar compra</button></NavLink>
        </div>
      </div>

      <div className="producto__img">
        <img src={product.img1} alt=""></img>
        <img src={product.img2} alt=""></img>
      </div>
    </div>
  )
}

export default Item
