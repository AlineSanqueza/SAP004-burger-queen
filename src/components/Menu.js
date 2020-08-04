import React from 'react';

const MenuButton = (props) => {
  const {breakfast} = props;
  return(
  //passar a função onclick como props. 
    <button onClick={props.onClink}>
      {breakfast.map((item) => {
        (
        <>
          <p>{item.name}</p>
          <p>R${item.price},00</p>
        </>
        )
      })}
    </button>
  );
}

export default MenuButton;
