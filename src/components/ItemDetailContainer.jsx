import { useState, useEffect } from "react";
import { getFetch } from "../servicios/getFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
	const { productosId } = useParams();
	const [productos, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	
	useEffect(() => {
		if (productosId === "todos") {
			getFetch
				.then((res) => {
					setItems(res);
				})
				.catch((err) => alert(`Error: ${err}`))
				.finally(() => setLoading(false));
		} else {
			getFetch
				.then((res) => {
					setItems(res.filter((productos) => productos.tipo === productosId));
				})
				.catch((err) => alert(`Error: ${err}`))
				.finally(() => setLoading(false));
		}
	}, [productosId]);

	return (
		<>
			<br />
			<br />
			{loading ? (
				<div className="spinner-border text-success" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			) : (
				<ItemDetail item={productos} />
			)}
		</>
	);
}

export default ItemDetailContainer;
