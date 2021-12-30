import { collection, getDocs, query, where, doc } from 'firebase/firestore'

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { db } from '../../firebase.js'

import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const producto = query(collection(db, "productos"), where("sku", "==", id))
    const promesa = getDocs(producto)

    promesa
    .then(resultado => {
      //Rever documentacion para encontrar mejor forma de hacer esto
      const productoFormateado = []
      resultado.forEach(doc => productoFormateado.push(doc.data()))
      setProduct(productoFormateado[0])
    })
    .catch(() => {
      console.log('error')
    })

  }, [id])

  console.log(id)

  return (
    <main class="main">
      <div class="contenedor">
      <ItemDetail product={product}/>
      </div>
    </main>
  )
}

export default ItemDetailContainer;
