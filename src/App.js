import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const estilo = {backgroundColor:"pink"}

  return (
    <div className="App" style={estilo}>
      <img src={logo} className="App-logo" alt="logo"  />
        <NavBar/>
    </div>
  );
}

export default App;
