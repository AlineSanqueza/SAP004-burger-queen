import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const MenuButton = ({el, index, onClick}) => {
  return (
    <button onClick={onClick} key={index} className={css(styles.button)}>
      <p key={el[0]+index}>{el[0]}</p>
      <p key={el[1]+index}>R${el[1]},00</p>
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
    marginRight: '5px',
    marginLeft: '5px',
    padding: '1px',
    cursor: 'pointer',
    ':active': {
      background: '#ccc',
      color: '#0D0D0D',
    }
  }
})


const styles = StyleSheet.create({
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
});

export default MenuButton;
