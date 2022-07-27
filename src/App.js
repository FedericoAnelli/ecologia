import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import backgImage from './components/assets/backgroundTemp.webp';


function App() {
  return (

    <div className="App">

      <header className="App-header">
        <NavBar />
      </header>

        <div className='centralContent'>
          <ItemListContainer greeting='Hola'/>
        </div>

      
    </div>

  );
}

export default App;
