import Item from '../Item/Item'

import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <section id="productos" className="productos">
      {products.map(product => <Item key={product.sku} product={product}/>)}
    </section>
  )

}

export default ItemList
