import { useState } from "react";
import {ButtonAdd, Card, Image} from "./Styles"

export default function Item( {nombre, descripcion, stock, imagen, add}) {
   

  const [amount, setAmount] = useState(stock); 

  const sub = ()=> {
      setAmount(amount - 1)
  } 


  return (
    <Card className='producto'>
          
          <h3> {nombre} </h3>
          <p> {descripcion} </p>
          <Image src={imagen} alt={"zapatilla"} />
          <h5> En stock: <span>   {amount > 0 ? amount : "AGOTADO"}  </span> </h5>
          <ButtonAdd disabled = { amount === 0 }  onClick={() => {sub(); add()}} > { amount === 0  ? "Sin stock" : "Comprar"} </ButtonAdd>
    </Card>
  )
}
