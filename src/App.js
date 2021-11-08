import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gretting from './components/gretting';
import Counter from './components/counter';
import './components/Elements.css';
import {Router, Switch, Route} from "react-router-dom"
import Cart from './components/Cart';
import Nosotros from './components/Nosotros';
import ItemDetailContainer from './components/ItemDetailContainer';
import ProductosList from './components/ProductosList';


function App() {

  const estilo = {backgroundColor:"pink"}

  return (
    <div className="App" >
      <header style={estilo}>
      <img src={logo} className="App-logo" alt="logo"  />
      <Router>
					<NavBar />
					<Switch>
						<Route exact path="/">
							<Gretting/>
						</Route>
						<Route exact path="/productos/:productoId" component={ProductosList} />
						<Route exact path="/item/:productosId" component={ItemDetailContainer} />
						<Route exact path="/cart" component={Cart} />
            <Route exact path="/Nosotros" component={Nosotros}/>
					</Switch>
				</Router>
      </header>

      

      
      
      
      
    {/*   <Route exact path = "/productos">
      <Counter/>
      </Route> */}

   
      
    </div>

  );
}

export default App;
