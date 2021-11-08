import Productos from "./Productos";

function ProductosList({ productos }) {
	return (
		<>
				{productos.map((producto) => (
					<div className="d-inline-flex">
						<Productos key={producto.id} item={producto} />
					</div>
				))}
		</>
	);
}
export default ProductosList;
