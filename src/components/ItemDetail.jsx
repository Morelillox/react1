import ItemCount from "./ItemCount";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";



function ItemDetail({ productos }) {

	const [cant, setCant] = useState(1);

	const onAdd = (count) => {
			setCant(count)
			alert(`Cantidad agregada al carrito es ${count}`)
	}



	return (
		<>
			<Container className="p-2">
				<br />
				<Row className="gx-5  shadow p-3 mb-5 bg-white rounded">
					<Col>
						<img
							src={productos.foto}
							className="containerImagenItem"
							alt="Mil budines foto de producto"
						/>
					</Col>
					<Col>
						<div className="container">
							<h3>{productos.name}</h3>
							<h5>{productos.detalle}</h5>
							<h3>$ {productos.price}</h3>
							<br />
							<ItemCount stock={productos.stock} initial={cant} onAdd={onAdd} />
							<button type="button" class="btn btn-outline-dark btn-sm m-1" disabled>
								{productos.stock} cantidades disponibles
							</button>
							<br />
							<Link to="/productos">
								<button class="btn btn-outline-success btn-sm m-1">Volver</button>
							</Link>
							
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default ItemDetail;
