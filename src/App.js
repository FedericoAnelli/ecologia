import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (

    <div className="App">

      <header className="App-header">
        <Routes>
        <Route path="*" element={<NavBar />} />
        </Routes>
      </header>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ItemListContainer />} />
      </Routes>

    </div>

  );
}

export default App;
