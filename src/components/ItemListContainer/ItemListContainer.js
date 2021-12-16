import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import ItemList from '../ItemList/ItemList'

const productsList = [
  {
    sku: "1001",
    categoria: "remeras",
    tipo: "Remera",
    modelo: "De Gira",
    color: "Blanca",
    talle: "",
    precio: 3600,
    stock: 10,
    img1: "../img/productos-remera-blanca-1.jpg",
    img2: "../img/productos-remera-blanca-2.jpg"

  },
  {
    sku: "1002",
    categoria: "remeras",
    tipo: "Remera",
    modelo: "Ojos",
    color: "Negra",
    talle: "",
    precio: 3400,
    stock: 15,
    img1: "../img/productos-remera-negra-1.jpg",
    img2: "../img/productos-remera-negra-2.jpg"
  },
  {
    sku: "2001",
    categoria: "buzos",
    tipo: "Hoodie",
    modelo: "De Gira",
    color: "Blanco",
    talle: "",
    precio: 6400,
    stock: 17,
    img1: "../img/productos-hoodie-blanco-1.jpg",
    img2: "../img/productos-hoodie-blanco-2.jpg"
  },
  {
    sku: "2002",
    categoria: "buzos",
    tipo: "Hoodie",
    modelo: "De Gira",
    color: "Negro",
    talle: "",
    precio: 6400,
    stock: 21,
    img1: "../img/productos-hoodie-negro-1.jpg",
    img2: "../img/productos-hoodie-negro-2.jpg"
  },
  {
    sku: "2003",
    categoria: "buzos",
    tipo: "Buzo",
    modelo: "Flaakko",
    color: "Negro",
    talle: "",
    precio: 5600,
    stock: 8,
    img1: "../img/productos-buzo-negro-1.jpg",
    img2: "../img/productos-buzo-negro-2.jpg"
  },
  {
    sku: "3001",
    categoria: "accesorios",
    tipo: "Gorra",
    modelo: "Baires",
    color: "Blanca",
    talle: "",
    precio: 3300,
    stock: 22,
    img1: "../img/productos-gorro-blanco-1.jpg",
    img2: "../img/productos-gorro-blanco-2.jpg"
  }
]

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const {id} = useParams()
  console.log(id)

  useEffect(() => {

    if (id === "coleccion") {
      const promesa = new Promise((res, rej) => {

        setTimeout(() => {

          res(productsList)

          rej()

        }, 2000)

      })

      promesa
          .then((res) => {
            setProducts(res)
          })
          .catch(() => {
            throw new Error('Error')
          })
    } else {
      const promesa = new Promise((res, rej) => {

        setTimeout(() => {

          res(productsList.filter(producto => producto["categoria"] === id))

          rej()

        }, 2000)

      })

      promesa
          .then((res) => {
            setProducts(res)
            console.log(products)
          })
          .catch(() => {
            throw new Error('Error')
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
