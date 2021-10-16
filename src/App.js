import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gretting from './components/ItemListContainer';



function App() {

  const estilo = {backgroundColor:"pink"}

  return (
    <div className="App" >
      <header style={estilo}>
      <img src={logo} className="App-logo" alt="logo"  />
      <NavBar/>
      </header>
      <Gretting/>
    </div>

  );
}

export default App;
