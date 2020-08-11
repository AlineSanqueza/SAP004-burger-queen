import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const MenuButton = (props) => {
  return (
    <button onClick={props.onClick} className={css(styles.button)}>
      <p>{props.el[0]}</p>
      <p>R${props.el[1]},00</p>
    </button>
  );
} 

const styles = StyleSheet.create({
  button: {
    background: '#D97904',
    fontFamily: 'Rubik',
    fontSize: '13px',
    borderRadius: '10px',
    borderStyle: 'none',
    color: '#F2F2F2',
    margin: '15px 5px',
    cursor: 'pointer',
    outline: 'none',
    ':active': {
      background: '#ccc',
      color: '#0D0D0D',
    }
  }
})


/*const styles = StyleSheet.create({
  button: {
    background: '#D97904',
    fontFamily: 'Spectral SC',
    fontSize: '13px',
    borderRadius: '10px',
    borderStyle: 'none',
    color: '#F2F2F2',
    marginRight: '5px',
    marginLeft: '5px',
    padding: '5px',
    cursor: 'pointer',
    outline: 'none',
    ':active': {
      background: '#ccc',
      color: '#0D0D0D',
    },  
  }
})*/

export default MenuButton;
