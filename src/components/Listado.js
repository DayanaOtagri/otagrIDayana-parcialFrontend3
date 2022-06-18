import React from 'react'
import Item from './Item'
import data from './data.json'


export default function Listado({add}) {
  return ( 

    <div className='container'>

      {data.map(element => (

          <Item 

          key = {element.id}
          nombre = {element.producto.nombre}
          descripcion = {element.producto.descripcion}
          stock = {element.stock}
          imagen = {element.producto.imagen}
          add = {add}

          />
      ))}
      
    </div>
  );
}
