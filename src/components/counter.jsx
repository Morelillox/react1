import React, { useState } from 'react';
import {Button, Card} from 'react-bootstrap';

function Counter() {
  
  const [count, setCount] = useState(0);

  let titulo = "Torta de Cumple"

  return (

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="" />
    <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
        Cantidad de {titulo} seleccionado: {count}
        </Card.Text>
      <Button  onClick={() => setCount(count + 1)} variant="success">+</Button>
      <Button onClick={() => setCount(count - 1)} variant="danger">-</Button>
      <Card.Footer>
      <Button>Confirmar Compra</Button>   
      </Card.Footer>
    </Card.Body>
  </Card>

    /* <div>
      <p>Veces seleccionado {count} </p>
      <Button  onClick={() => setCount(count + 1)} variant="success">
        +
      </Button>
      <Button onClick={() => setCount(count - 1)} variant="danger">
        -
      </Button>
    </div> */

  );
}

export default Counter