const Item = ({ product }) => {

  return (
    <div class="producto">
      <div class="producto__sticky">
        <div class="producto__info">
          <h1 class="producto__nombre no-margin">{product.modelo}</h1>
          <p class="producto__detalle no-margin">{product.tipo} {product.color}</p>
          <p class="producto__precio no-margin">${product.precio}</p>
          <div class="producto__color">
            <img class="producto__miniatura" src="../img/producto-blanco-1-miniatura.jpg" alt=""></img>
            <img class="producto__miniatura" src="../img/producto-negro-1-miniatura.jpg" alt=""></img>
          </div>
          <form id="form-producto" class="" action="">
            <select id="talle-producto" class="producto__talle" name="" required>
              <option value="" disabled selected>Elegi tu talle</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <button class="producto__boton" type="submit" name="button">Agregar a carrito</button>
          </form>
        </div>
      </div>

      <div class="producto__sticky-responsive">
        <div class="producto__info-responsive">
          <p class="producto__nombre-responsive no-margin">{product.tipo} <span>{product.modelo}</span> {product.color}</p>
          <p class="producto__precio-responsive no-margin">${product.precio}</p>
          <select class="producto__talle-responsive" name="">
            <option value="xs" disabled selected>Elegi tu talle</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
          <button class="producto__boton-responsive" type="submit" name="button">Agregar a carrito</button>
        </div>
      </div>

      <div class="producto__img">
        <img src={product.img1} alt=""></img>
        <img src={product.img2} alt=""></img>
      </div>
    </div>
  )
}

export default Item
