import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
      <div>
        <Header/>
        
        <ItemDetailContainer />
        <Footer/>
      </div>
  )
}

export default App;
