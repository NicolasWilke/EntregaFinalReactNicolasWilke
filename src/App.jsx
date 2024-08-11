import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CarritoProvider } from './context/CarritoContext.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {


  return (
    <>

      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Venta de vinos y destilados" />} />
            <Route path='/varietal/:varietalCategoria' element={<ItemListContainer greeting="Venta de vinos y destilados" />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer/>
        </CarritoProvider>
      </BrowserRouter>

    </>
  )
}

export default App
