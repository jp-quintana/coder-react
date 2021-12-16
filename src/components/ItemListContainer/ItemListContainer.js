import { useState, useEffect } from 'react';

import ItemList from '../ItemList/ItemList'

const productsList = [
  {
    sku: "1001",
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

  useEffect(() => {

    const promesa = new Promise((res, rej) => {

      setTimeout(() => {
        console.log("Aca se pide el array");

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

  }, [])

  return (
    <main class="main">
      <div class="contenedor">
        <ItemList products={products} />
      </div>
    </main>
  )
}

export default ItemListContainer;
