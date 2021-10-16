import { BsCart3 } from "react-icons/bs";


const CartWidget = () => {
  
    return(
        
        <div style={{display: "inline-flex"}}>
        <p style={{color:"pink"}}>20</p>
        <BsCart3 className="Carrito" fill= "pink" style={{width:"2rem", height:"2rem"}}  />
        </div>
          
        
    )
}

export default CartWidget