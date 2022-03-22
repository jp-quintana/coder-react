import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="footer-grid">
          <section className="paginas">
            <div className="paginas__item">
              <p className="paginas__titulo-seccion no-margin">Ayuda</p>
              <a className="paginas__enlace" href="pages/contacto.html">Contacto</a>
              <a className="paginas__enlace" href="pages/pagos-envios.html">Pagos & envios</a>
              <a className="paginas__enlace" href="pages/ordenes.html">Ordenes</a>
              <a className="paginas__enlace" href="pages/retornos.html">Retornos</a>
            </div>
            <div className="paginas__item">
              <p className="paginas__titulo-seccion no-margin">Info</p>
              <a className="paginas__enlace" href="pages/sobre-nosotros.html">Sobre nosotros</a>
            </div>
          </section>
          <section className="redes">
            <a className="redes__enlace" href="https://wa.me/5491140814446" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </a>
            <a className="redes__enlace" href="https://twitter.com/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </a>
            <a className="redes__enlace" href="https://www.spotify.com/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-spotify" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
                <path d="M9 15c1.5 -1 4 -1 5 .5" />
                <path d="M7 9c2 -1 6 -2 10 .5" />
              </svg>
            </a>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
