import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import {Routes,Route} from "react-router-dom"

const Main = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:id" element={<ItemListContainer/>}/>
        </Routes>
      </div>
  )
}

export default Main;
