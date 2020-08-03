import React from 'react';

const MenuItem = (props) => {
  return(
    <button onClick={props.onClick}>
      <p>{props.name}</p>
      <p>R${props.price},00</p>
      <p>{props.title}</p>
      <p>{props.type}</p>
    </button>
  );
}

export default MenuItem;
