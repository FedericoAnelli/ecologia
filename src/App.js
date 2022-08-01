import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/project/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route
                    path="/category/:category"
                    element={<ItemListContainer />}
                />
        <Route path="*" element={<ItemListContainer />} />
        <Route path="/" element={<ItemListContainer />} />
      </Routes>
      <ItemDetailContainer />
    </div>

  );
}

export default App;
