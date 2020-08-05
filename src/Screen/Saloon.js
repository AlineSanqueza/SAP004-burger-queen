import React, { useEffect, useState } from 'react';
import Nav from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input';
import MenuButton from '../components/Menu';
import firebase from '../firebase';
import Swal  from 'sweetalert2';
import { StyleSheet, css } from 'aphrodite';

const Saloon = () => {
  const [menu, setMenu] = useState('breakfast');
  const [breakfast, setBreakfast] = useState([]);
  const [burger, setBurgers] = useState([]);
  const [customer, setCustomer] = useState('');
  const [table, setTable] = useState('');

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
      );
  }
  const OptionMenu = () => {
    firebase
    .firestore()
    .collection('menu')
    .doc('breakfast')
    .get()
    .then((snapshot) => {
      setBreakfast(Object.entries(snapshot.data()))
    });
}
const OptionBurger = () => {
  firebase
  .firestore()
  .collection('menu')
  .doc('burgers')
  .get()
  .then((snapshot) => {
    setBreakfast(Object.entries(snapshot.data()))
  });
}

  //const allBurguer = (e) => {
  //  setMenu(e.target.value);
  //  OptionBurger = () => {
  //    ({ name:'burgers', state: setBurgers})
  //}

  return (
    <main className={css(styles.main)}>
      <Nav/>
      <div className={css(styles.bntMenu)}>
        <Button style={css(styles.button)} onClick={(e) => OptionMenu(e.target.value)} className={css(styles.button)} children='Café da manhã'/>
        <Button style={css(styles.button)} onClick={(e) => OptionBurger(e.target.value)} children='Lanches'/>
      </div>
      <div className={css(styles.menu)}>
        {breakfast.map((el, index) => <MenuButton  className={css(styles.button)} el={el} index={index}/>)}
        {burger.map((el, index) => <MenuButton className={css(styles.button)} el={el} index={index}/>)}
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
    height: '100vh',
  },
  btnMenu: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '50px',
    alignItems: 'center',
    padding: '18px',
    position: 'fixed',
    top: '0',
    width: '100%'
  },
    
  menu: {
    marginTop: '15%',
    background: '#0D0D0D',
    width: '70%',
    height: '12vh',
    display: 'flex',
    //flexDirection: 'column',
    borderRadius: '10px',
    marginLeft: '10%',
    //alignItems: 'center',
  },
  button: {
    background: '#F2F2F2',
    borderRadius: '10px',
    width: '60%',
    height: '50%',
    margin: '0% 3% 2%',
    padding:'5px',
    fontFamily: 'Spectral SC',
    color: '#0D0D0D',
    fontSize: '24px',
    borderStyle: 'none',
    cursor: 'pointer',
    ':active': {
    background: '#D97904',
    }
    //background: '#ccc',
    //width: '35%',
    //display: 'flex',
    //borderRadius: '10px',
    //alignItems: 'center',
},
    //menuButton:{
    //    background: 'F2F2F2',
    //    color:'#ccc',
    //    width: '10vw',
    //    height: 'auto',
    //    margin: '2vw 1.5vw 1vw 1.5vw',
    //    fontSize: '0.8rem',
    //    borderRadius: '2vw',
    //    fontWeight: 'bold',
    //    border: 'none',
    //    borderRadius: '10px'
    //}, 

  containerOrder: {
    marginTop: '50%',
    background: '#ccc',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    marginLeft: '30%',
    alignItems: 'center',

    /*background: 'tomato',
    alignItems: 'center',
    flexDirection: 'column',
    width: '30%',
    display: 'flex',
    borderRadius: '5px'*/
  },
//  secMenu: {
//    display: 'flex',
//    justifyContent: 'center',
//    flexFlow: ['column', 'wrap'],
//},
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
  }
})

export default Saloon;