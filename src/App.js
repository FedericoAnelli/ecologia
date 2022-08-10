import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';

function App() {

  return (

    <div className="App">
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/project/:projectId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route
                    path="/category/:category"
                    element={<ItemListContainer />}
                />
        <Route path="*" element={<ItemListContainer />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartProvider>
    </div>

  );

}

export default App;
