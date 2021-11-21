import { Container } from "react-bootstrap";



function HomeContainer({ greeting }) {
	return (
		<Container>
			<h2 className="text-center mt-5 pt-4">{greeting}</h2>
					
			<h2 className="text-center p-3">Los Mejores budines del condado !!!</h2>
			<br />
			<br />
			<br />
		</Container>
	);
}

export default HomeContainer;
