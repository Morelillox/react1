import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Productos({ productos }) {
	return (
		<div className="container">
			<Card style={{ width: "15rem" }} className="mt-5 shadow p-3 mb-5 bg-white rounded">
				<Link to={`/productos/${productos.id}`}>
					<Card.Img variant="top" src={productos.foto} />
				</Link>
				<Card.Body>
					<Card.Title className="text-center">
						Id: {productos.id} - {productos.name}
					</Card.Title>
					<Card.Title className="text-center">$ {productos.price}</Card.Title>
					<Link to={`/productos/${productos.id}`}>
						<button className="btn btn-success btn-sm">Ver mas !!!</button>
					</Link>
					<Card.Title className="text-center m-2">Stock {productos.stock}</Card.Title>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Productos;
