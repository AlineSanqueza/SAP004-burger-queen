import React from 'react';

const MenuButton = ({el, index, onClick}) => {
  return (
    <button onClick={onClick} key={index}>
      <p key={el[0]+index}>{el[0]}</p>
      <p key={el[1]+index}>R${el[1]},00</p>
    </button>
  );
}

export default MenuButton;
