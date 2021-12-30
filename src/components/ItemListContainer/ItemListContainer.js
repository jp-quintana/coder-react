import { collection, getDocs, query, orderBy, where } from 'firebase/firestore'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { db } from '../../firebase.js'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const {id} = useParams()


  useEffect(() => {

    if (id === "coleccion" || !id) {

      const productos = query(collection(db, "productos"), orderBy("sku", "asc"))
      const promesa = getDocs(productos)

      promesa
      .then(resultado => {

        const productosFormateados = []

        resultado.forEach(doc => {
          productosFormateados.push(doc.data())
        })
        
        setProducts(productosFormateados)
      })
      .catch(() => {
        console.log('error')
      })

    } else {

      //Le meti un index a la coleccion en el firestore para que funcione este query
      const productos = query(collection(db, "productos"), where("categoria", "==", id), orderBy("sku", "asc"))
      const promesa = getDocs(productos)

      promesa
      .then(resultado => {

        const productosFormateados = []

        resultado.forEach(doc => {
          productosFormateados.push(doc.data())
        })

        setProducts(productosFormateados)
      })
      .catch(() => {
        console.log('error')
      })
    }
  }, [id])

  return (
    <main class="main">
      <div class="contenedor">
        <ItemList products={products} />
      </div>
    </main>
  )
}

export default ItemListContainer;
