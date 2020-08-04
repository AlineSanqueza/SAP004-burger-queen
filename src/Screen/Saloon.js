import React, { useState,useEffect } from 'react';
import Nav from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input';
import MenuButton from '../components/Menu'
import { StyleSheet, css } from 'aphrodite';
import firebase from '../firebase';
const Saloon = () => {
    const [menu,setMenu] = useState('breakfast')
    const [breakfast,setBreakfast] = useState({})
    const [burger,setBurgers] = useState({})

        const Optionmenu = () => {
        firebase
        .firestore()
        .collection('menu')
        .doc('breakfast')
        .get()
        .then((snapshot) => {
            for (const item in snapshot.data()) {
                        console.log(item)
                    }
        })
        .set(breakfast)
        
    }
    //opcao 1: mudar o set do breakfast,logo abaixo do then
    // opcao 2: chamar a função que esta fazendo o useState.
    useEffect(() => {
        Optionmenu({name:'breakfast',state:setBreakfast})
    },[])

    const allBurguer =(e) => {
        setMenu(e.target.value);
        Optionmenu({ name:"burgers", state: setBurgers})
    }

      //.then((snapshot=> {
        //    for (const item in snapshot.data()) {
        //        console.log(item)
        //    }
    
    //const burger = () => {
    //    firebase
    //    .firestore()
    //    .collection('menu')
    //    .doc('burgers')
    //    .get()
    //    .then((snapshot=> {
    //        for (const item in snapshot.data()) {
    //            console.log(item)
    //        }
    //    }))
    //}

  return (
    <main className={css(styles.main)}>
      <Nav className={css(styles.nav)}/>
      <MenuButton breakfast={breakfast} />
      <div className={css(styles.menu)}>
        <Button style={css(styles.button)} value='breakfast' onClick={(e) =>Optionmenu(e.target.value)} children='Café da manhã'/>
        <Button style={css(styles.button)}  value='burgers' onClick={allBurguer}  children='Lanches' />
       </div>
       {/*<div className={css(styles.secMenu)}>
        {menuType.map((selectedItem)=> 
       <MenuButton onclick= {() => verifyOptions(selectedItem)} {...selectedItem} className={css(styles.menuButton)}  />
       )}
       </div>*/}
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
    height: '100vh',
  },
  nav: {
    background: 'tomato',
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

  })
export default Saloon;