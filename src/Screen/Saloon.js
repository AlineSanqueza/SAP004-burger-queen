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
        <div className={css(styles.position)}>
          <Input style={css(styles.input)} type='text' title='Cliente'/>
          <Input style={css(styles.input)} type='number' title='Mesa'/>
        </div>
          <>
            <div className={css(styles.order)}> Qtd:
              <Button style={css(styles.delete)} children='🗑️'/>
            </div>
          </>
          <div className={css(styles.position)}>
            <p className={css(styles.p)}>Total: R$,00</p>
            <Button style={css(styles.send)} children='Enviar pedido'/>
          </div>
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
    fontSize: '20px',
    color: 'black',
    padding: '10px'
  },
  input: {
    /*borderRadius: '6px',
    width: '170px',
    height: '35px',
    textAlign: 'center',*/
    borderRadius: '5px',
    width: '40%',
    padding: '10px',
    fontSize: '14px',
    background: '#F2F2F2',
    borderStyle: 'none'
  },
  order: {
    fontSize: '20px'
  },
  position: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  delete: {
    borderStyle: 'none',
    backgroundColor: 'transparent',
  },
  send: {
    background: '#D97904',
    color: '#F2F2F2',
    borderRadius: '5px',
    height: '40px',
    fontSize: '15px',
    borderStyle: 'none',
    cursor: 'pointer',
    margin: '25px'
},
  containerOrder: {
    marginTop: '10%',
    background: '#ccc',
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    marginLeft: '60%',
    alignItems: 'center',

    /*background: 'tomato',
    alignItems: 'center',
    flexDirection: 'column',
    width: '30%',
    display: 'flex',
    borderRadius: '5px'*/
  },
  })
export default Saloon;
