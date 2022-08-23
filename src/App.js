import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import CartContainer from './components/CartContainer/CartContainer';
import CartProvider from './context/CartContext';
import RegistrationContainer from './components/RegistrationContainer/RegistrationContainer';

function App() {

  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  }

  return (

    <div className="App">
      <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/project/:projectId" element={<ItemDetailContainer />} />
        <Route path="/project/error" element={<p className='errorParagraph'>El proyecto al que intentas acceder no existe. Click <strong className='acaParagraph' onClick={backToHome}>ACÁ</strong> para volver</p>} />
        <Route path="/register" element={<RegistrationContainer />} />
        <Route
                    path="/category/:category"
                    element={<ItemListContainer />}
                />
        <Route path="*" element={<ItemListContainer />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
      </CartProvider>
    </div>

  );

}

export default App;
