import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import CartContext from './context/CartContext';

import './App.css'

const App = () => {

  return (
      <CartContext>
        <Header/>

        <Main/>

        <Footer/>
      </CartContext>
  )
}

export default App;
