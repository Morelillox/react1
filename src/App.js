import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// BrowserRouter as Router, me permite poner Router en lugar de BrowerRouter
import logo from './logo.svg';
import ItemListContainer from "./components/Containers/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
import HomeContainer from "./components/Containers/HomeContainer";
import Cart from "./components/Cart";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from "./context/CartContext";

function App() {

	const estilo = {backgroundColor:"pink"}
	return (
		<>
			<div className="App">
			<header style={estilo}>
			<img src={logo} className="App-logo" alt="logo"  />
				<CartContextProvider>
					<Router>
						<NavBar />
						<Switch>
							<Route exact path="/">
								<HomeContainer greeting="Bienvenidos a Mil Budines - Tus preferidos!!" />
							</Route>
							<Route
								exact
								path="/category/:categoryId"
								component={ItemListContainer}
							/>
							<Route exact path="/item/:itemId" component={ItemDetailContainer} />
							<Route exact path="/cart" component={Cart} />
						</Switch>
					</Router>
				</CartContextProvider>
				</header>
			</div>
		</>
	);
}

export default App;
