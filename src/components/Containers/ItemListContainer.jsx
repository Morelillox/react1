import {Container, Button, Spinner} from "react-bootstrap";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getFirestore} from "../../servicios/getFirestore";
import ItemList from "./../ItemList";

function ItemListContainer() {
	const {categoryId} = useParams();
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const db = getFirestore();
		const dbQuery =
			categoryId === "todos"
				? db.collection("items").orderBy("category", "asc").orderBy("name")
				: db.collection("items").where("category", "==", categoryId).orderBy("name");
		dbQuery.get()
			.then((resp) => setItems(resp.docs.map((items) => ({id: items.id, ...items.data()}))))
			.catch((err) => alert(`UPSSS Error: ${err}`))
			.finally(() => setLoading(false));
	}, [categoryId]);

	return (
		<Container>
			<br />
			<br />
			<h2 className="mt-5">Nuestras delicias - {categoryId.toUpperCase()}</h2>
			{loading ? (
				<Button className="m-5" variant="success" disabled>
					<Spinner
						as="span"
						animation="border"
						role="status"
						aria-hidden="true"
						size="lg"
					/>
					Cargando ...
				</Button>
			) : (
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xxl-4 mb-5 text-center">
					<ItemList items={items} />
				</div>
			)}
		</Container>
	);
}

export default ItemListContainer;
