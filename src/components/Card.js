import React from 'react';
import Button from '../components/Button';

const CardKitchen = (props) => {
  return (
    <section>
      <p>Cliente: {props.customer}</p>
      Mesa: {props.table}
      <div>
        {props.clientOrder.map((order)=>(
          <div>
            {order.item}
            {order.price}
          </div>
        ))}
      </div>
      <p>Status: {props.status}</p>
      <p>{props.time}</p>
      <div>
        <Button title= 'Pedido Pronto'/>
      </div>
    </section>
  );
}

export default CardKitchen;
