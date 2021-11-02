import React, { useState } from 'react';
import {Button, Card} from 'react-bootstrap';
import {useEffect} from 'react'
import { getFetch } from '../servicios/getFetch'
import '../Counter.css';
import '../Botones.css';

const Counter = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      getFetch
      .then( res => {        
          console.log('llamada a api') // alguna accion con la respuesta 
          console.log(res) 
          setProduct(res)
      })    
      
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
     
     
  },[])   

  const [count, setCount] = useState(0);
  

  
  let stock = 10

 function Stock (){
  if ([count]>{stock}){
    alert("No se cuenta con stock disponible.")
  } else {alert("Compra confirmada")}
  
} 


 
  return (
      <>
         <h2>Menu Dulce:</h2>          
          
          { loading ? <h1>Cargando...</h1> :         
                  product.map(prod=> 
                    <div className="divisor">
                    <Card className="container"  style={{ width: '18rem' }} key={prod.id}>
                    <Card.Img variant="top" src={prod.foto} />
                    <Card.Body>
                        <Card.Title>{prod.precio}</Card.Title>
                        <Card.Text>
                        {prod.name}
                        </Card.Text>
                        <Card.Text>
                        {prod.price}
                        </Card.Text>
                       <Card.Footer> 
                       <Card.Text>{count}</Card.Text>   
                      <Button className="btn btn-custom"  onClick={() => setCount(count + 1)} >+</Button>
                      <Button className="btn btn-custom" onClick={() => setCount(count - 1)} >-</Button>
                      <br />
                      <Button className="container btn btn-custom" onClick={(Stock)} >Confirmar Compra</Button>   
                      </Card.Footer>
                    </Card.Body>
                    </Card>
                    </div>
          )
          }
      </>
  )
}

export default Counter