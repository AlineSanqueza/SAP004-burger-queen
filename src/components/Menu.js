import React from 'react';

function MenuButton(props) {
    //const {breakfast} = props;
    return(
        // passar a função onclick como props. 
        <button onClick={props.onClink}>
                        <>
                        <p>{item.name}</p>
                        <p>R${item.price},00</p>
                        </>
        </button>
    )
}

export default MenuButton;