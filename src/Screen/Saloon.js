import React, { useEffect, useState } from 'react';
import Nav from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input';
import firebase from '../firebase';
import Swal  from 'sweetalert2';
import { StyleSheet, css } from 'aphrodite';

const Saloon = () => {
  const [customer, setCustomer] = useState('')
  const [table, setTable] = useState('')

  const breakfast = () => {
    firebase
    .firestore()
    .collection('menu')
    .doc('breakfast')
    .get()
    .then((snapshot => {
      for(const item in snapshot.data()){
        console.log(item)
      }
    }))
  }

  const sendOrder = () => {
    !customer || !table ?
      Swal.fire({
        title: 'Atenção',
        text: 'Digite o nome do cliente ou o número da mesa',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
      :
      firebase
      .firestore()
      .collection('orders')
      .add({
        customer,
        table
      }).then(
        Swal.fire({
          title: 'Pedido enviado com sucesso',
          icon: 'success',
          showConfirmButton: false,
          timer: 1600
        })
      )
  }

  return (
    <main className={css(styles.main)}>
      <Nav/>
      <div className={css(styles.bntMenu)}>
        <Button style={css(styles.button)} onClick={breakfast} children='Café da manhã'/>
        <Button style={css(styles.button)} children='Lanches'/>
      </div>
      <div className={css(styles.menu)}>

      </div>
      <div className={css(styles.containerOrder)}>
        <p className={css(styles.p)}>Resumo do pedido</p>
        <div className={css(styles.position)}>
          <Input style={css(styles.input)} onChange={(e)=>setCustomer(e.target.value)} type='text' title='Cliente'/>
          <Input style={css(styles.input)} onChange={(e)=>setTable(e.target.value)} type='number' title='Mesa'/>
        </div>
          <>
            <div className={css(styles.order)}> Qtd:
              <Button style={css(styles.delete)} children='🗑️'/>
            </div>
          </>
          <div className={css(styles.position)}>
            <p className={css(styles.p)}>Total: R$,00</p>
            <Button style={css(styles.send)} onClick={sendOrder} children='Enviar pedido'/>
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
  btnMenu: {
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
  },
  })

export default Saloon;