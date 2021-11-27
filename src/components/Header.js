import Nav from './Nav'
// import logo from '/img/logo1 b.png'

const Header = () => {
  return (
    <header class="header">
      <div class="header-grid">
        <div class="logo">
          <a class="logo__link" href="index.html">
            <img class="logo__nombre" src='/img/logo1 b.png' alt="logo flaakko" />
          </a>
        </div>
        <Nav/>
      </div>
    </header>
  )
}

export default Header;
