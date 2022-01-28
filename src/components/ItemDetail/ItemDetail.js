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
    <div className="producto">
      <div className="producto__sticky">
        <div className="producto__info">
          <h1 className="producto__nombre no-margin">{product.modelo}</h1>
          <p className="producto__detalle no-margin">{product.tipo} {product.color}</p>
          <p className="producto__precio no-margin">${product.precio}</p>
          <div className="producto__color">
            <img className="producto__miniatura" src="../img/producto-blanco-1-miniatura.jpg" alt=""></img>
            <img className="producto__miniatura" src="../img/producto-negro-1-miniatura.jpg" alt=""></img>
          </div>

          <form id="form-producto" className="" action="">
            <select id="talle-producto" className="producto__talle" name="" required>
              <option value="" disabled selected>Elegi tu talle</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </form>
          <ItemCount stock={product.stock} onAdd={handleOnAdd} initial={1}/>
          <NavLink to="/cart"><button className="producto__boton" type="submit" name="button">Terminar compra</button></NavLink>
        </div>
      </div>

      <div className="producto__sticky-responsive">
        <div className="producto__info-responsive">
          <p className="producto__nombre-responsive no-margin">{product.tipo} <span>{product.modelo}</span> {product.color}</p>
          <p className="producto__precio-responsive no-margin">${product.precio}</p>
          <select className="producto__talle-responsive" name="">
            <option value="xs" disabled selected>Elegi tu talle</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
          <button className="producto__boton-responsive" type="submit" name="button">Agregar a carrito</button>
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
