import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gretting from './components/gretting';
import Counter from './components/counter';
import './components/Elements.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"


function App() {

  const estilo = {backgroundColor:"pink"}

  return (
    <div className="App" >
      <header style={estilo}>
      <img src={logo} className="App-logo" alt="logo"  />
      <NavBar/>
      </header>

      <BrowserRouter>
        <Switch>
      
      <Route exact path = "/home">         
      <Gretting/>
      </Route>
      
      <Route exact path = "/productos">
      <Counter/>
      </Route>
      
      </Switch>
    </BrowserRouter>
      
    </div>

  );
}

export default App;
