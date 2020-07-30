import React from 'react';
import Nav from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input';
import { StyleSheet, css } from 'aphrodite';

const Saloon = () => {
  return (
    <main className={css(styles.main)}>
      <Nav className={css(styles.nav)}/>
      <div className={css(styles.menu)}>
        <Button style={css(styles.button)} children='Café da manhã'/>
        <Button style={css(styles.button)} children='Lanches' />
      </div>
      <div className={css(styles.containerOrder)}>
        <p className={css(styles.p)}>Resumo do pedido</p>
        <Input style={css(styles.input)} type='text' title='Cliente'/>
        <Input style={css(styles.input)} type='number' title='Mesa'/>
          <>
            <div className={css(styles.order)}> Qtd:
              <Button children='🗑️'/>
            </div>
          </>
          <p className={css(styles.p)}>Total: R$,00</p>
          <Button style={css(styles.send)} children='Enviar'/>
      </div>
    </main>
  );
}

const styles = StyleSheet.create({
  main: {
    background: '#0D0D0D',
    width:'100%',
    height: '100vh'
  },
  nav: {
    background: 'tomato',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '18px',
    position: 'fixed',
    top: '0',
    width: '100%'
  },

  menu: {
      display: 'flex',
    alignItems: 'center',
  },
  button: {
    background: 'F2F2F2',
    padding: '15px',
    borderRadius: '5px',
    fontSize: '14px',
    borderStyle: 'none',
    
   
    cursor: 'pointer',
    ':active': {
    background: '#D97904',
    }
  },
  p: {
    fontSize: '15px',
    color: '#F2F2F2',
  },
  input: {
    borderRadius: '10px',
    width: '15%',
    padding: '10px',
    margin: '0% 3% 2%',
    fontSize: '14px',
    background: '#F2F2F2',
    borderStyle: 'none'
  },
  send:{
    background: 'F2F2F2',
    color: '#0D0D0D',
    padding: '15px',
    borderRadius: '5px',
    fontSize: '14px',
    borderStyle: 'none',
    cursor: 'pointer',
    ':active': {
    background: '#D97904',
    }
},
  containerOrder: {
    background: 'tomato',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    display: 'flex',
    borderRadius: '10px'
  },

})

export default Saloon;
