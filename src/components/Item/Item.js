import {NavLink} from 'react-router-dom'

import ItemCount from '../ItemCount/ItemCount'

const Item = ({ product }) => {

  const handleOnAdd = () => {

  }

  return (
    <div class="productos__item">
      <NavLink to={`/producto/${product.sku}`}class="productos__enlace">
        <div class="productos__imagen-contenedor">
          <img src={product.img1} alt="" class="productos__imagen"></img>
          <img src={product.img2} alt="" class="productos__imagen-bottom"></img>
        </div>
        <ul class="productos__info">
          <li class="productos__nombre">{product.tipo} <span>{product.modelo}</span> {product.color}</li>
          <li class="productos__precio">${product.precio}</li>
        </ul>
      </NavLink>
      <ItemCount stock={product.stock} onAdd={handleOnAdd} initial={1}/>      
    </div>
  )
}

export default Item
