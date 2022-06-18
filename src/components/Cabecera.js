import React from 'react'
import {Count, }from "./Styles"
import { BsFillCartFill } from "react-icons/bs";


export default function Cabecera({bought}) {
  
  return (
    <header>
        {
          <div>
          <h1> Carrito de compras </h1>
          <Count> Cantidad de productos <BsFillCartFill className='carrito' />  <span> { bought } </span> </Count>
          </div>
        }  
    </header>
  )
}
