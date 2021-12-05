import Item from '../Item/Item'

const ItemList = ({products}) => {
  return (
    <section id="productos" class="productos">
      {products.map(product => <Item key={product.sku} product={product}/>)}
    </section>
  )

}

export default ItemList
