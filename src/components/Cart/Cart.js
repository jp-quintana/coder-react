import { db } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'

import { useContext, useState } from 'react';
import {NavLink} from 'react-router-dom'

import { context } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

import './Cart.css'

const Cart = () => {

  const { carrito, carritoPrecio, clear } = useContext(context);
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("nombre");
  const [apellido, setApellido] = useState("apellido");
  const [email, setEmail] = useState("email@email.com");
  const [telefono, setTelefono] = useState(11111111);

  const guardarCompra = async () => {

    setLoading(true);
    const orden = {
      productos: carrito,
      usuario: {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono
      },
      total: carritoPrecio
    }

    const ordenesCollection = collection (db, "ordenes");

    const referencia = await addDoc(ordenesCollection, orden)

    const id = referencia.id;

    setLoading(false);
    setId(id);
    setNombre('nombre');
    setEmail('email@email.com');
    setTelefono(1132074782);
    setTimeout(clear, 3000);
  }

  const handleChangeNombre = e => {
    setNombre(e.target.value);
  }

  const handleChangeApellido = e => {
    setApellido(e.target.value);
  }

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  }

  const handleChangeTelefono = e => {
    setTelefono(e.target.value);
  }



  return (
    <main className="main">
      <div className="contenedor">
        <section className="carrito">
          <h1>Carrito</h1>
          {
            carrito.length === 0

            ?

            <>
            <p>El carrito está vacio</p>

            <div className="carrito__boton-container">
              <NavLink to="/"><button id="boton-carrito" type="button" className="carrito__boton">Volver a productos</button></NavLink>
            </div>
            </>

            :

            <>
            <table className="carrito__tabla">
              <tbody id="body-carrito" className="carrito__body">
                {carrito.map(item => <CartItem key={item['producto']['sku']} item={item}/>)}
              </tbody>
            </table>

            <p id="precio-total-carrito" className="carrito__total">Total: ${carritoPrecio}</p>

            <div className="carrito-form">
              <div className="">
                <label className="carrito-form__labels">Nombre</label>
                <input type="text" onChange={handleChangeNombre} placeholder="nombre" />
              </div>
              <div className="">
                <label className="carrito-form__labels">Apellido</label>
                <input type="text" onChange={handleChangeApellido} placeholder="apellido" />
              </div>
              <div className="">
                <label className="carrito-form__labels">Email</label>
                <input type="email" onChange={handleChangeEmail} placeholder="email@email.com" />
              </div>
              <div className="">
                <label className="carrito-form__labels">Telefono</label>
                <input type="number" onChange={handleChangeTelefono} placeholder="11111111" />
              </div>
            </div>

            <div className="carrito__boton-container">
              <button onClick={guardarCompra} id="boton-carrito" type="button" className="carrito__boton">Confirmá compra</button>
            </div>
            {loading && <p>Cargando...</p>}
            {id && <p>Se guardo la compra con id {id}</p>}
            </>
          }
        </section>
      </div>
    </main>
  )
}

export default Cart
