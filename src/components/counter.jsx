import React, { useState } from 'react';
import {Button, Card} from 'react-bootstrap';
import {useEffect} from 'react'
import { getFetch } from '../servicios/getFetch'
import '../Counter.css';
import '../Botones.css';
import ItemCount from './ItemCount';


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

 
  
  const [cant, setCant] = useState(1);

	const onAdd = (count) => {
			setCant(count)
			alert(`Cantidad agregada al carrito es ${count}`)
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
                       {/* <Card.Text>{count}</Card.Text>   */} 
                       <ItemCount stock={prod.stock} initial={cant} onAdd={onAdd} />
                       <br />  
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