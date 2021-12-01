import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
      <div>
        <Header/>
        <ItemListContainer greeting="Bienvenido. No te pierdas nuestro descuentos de Cyber Monday."/>
        <Footer/>
      </div>
  )
}

export default App;
