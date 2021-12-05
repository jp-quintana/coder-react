import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
      <div>
        <Header/>
        <ItemListContainer />
        <Footer/>
      </div>
  )
}

export default App;
