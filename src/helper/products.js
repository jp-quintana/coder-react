const products = [
  {
    sku: "1001",
    tipo: "Remera",
    modelo: "De Gira",
    color: "Blanca",
    talle: "",
    precio: 3600,
    unidades: 1,
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
    unidades: 1,
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
    unidades: 1,
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
    unidades: 1,
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
    unidades: 1,
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
    unidades: 1,
    img1: "../img/productos-gorro-blanco-1.jpg",
    img2: "../img/productos-gorro-blanco-2.jpg"
  }
]

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 3000)
  })
}
