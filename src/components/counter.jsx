import React, { useState } from 'react';
import {Button, Card} from 'react-bootstrap';



function Counter() {
  
  const [count, setCount] = useState(0);

  let titulo = "Torta de Cumple"
  let stock = 10

 function Stock (){
  if ([count]>stock){
    alert("No se cuenta con stock disponible.")
  } else {alert("Compra confirmada")}
  
}

  return (

  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="../../public/assets/menu/tortaCumpleanos.jpg" />
    <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>
        Cantidad de {titulo} seleccionado: {count}
        </Card.Text>
      <Button  onClick={() => setCount(count + 1)} variant="success">+</Button>
      <Button onClick={() => setCount(count - 1)} variant="danger">-</Button>
      <Card.Footer>
      <Button onClick={(Stock)}>Confirmar Compra</Button>   
      </Card.Footer>
    </Card.Body>
  </Card>


  );
}

export default Counter