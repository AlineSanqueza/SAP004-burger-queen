import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Nav from '../components/Navbar';
//import Card from '../components/Card';
import {StyleSheet,css} from 'aphrodite'
const Kitchen = () => {

  const orderKitchen =() =>{
    console.log('funcinou?')
    firebase.firestore().collection('orders').get()
    .then((snapshot) => {
      const customer = snapshot.data().id
      const table = snapshot.data().table
      console.log(customer,table)
    })
    console.log('funcinou?')
  }

  return (
    <main className={css(styles.main)}>
      <Nav/>
      <div className={css(styles.tite)}>
      <h1 >Cozinha</h1>
      </div>
      {/*<div>
        {orders.map((ord)=>{
          < Card key={ord.id}
          nameClient ={ord.customer}
          tableNumber ={ord.table}
          />
        })}
        
      </div>*/}
    </main>
  );  
}

const styles = StyleSheet.create({
  main: {
    background: '#0D0D0D',
    width:'100%',
    height: '100vh',
    fontSize:'18px'
  },
  
  title: {
    color: '#ccc',
    fontSize: '36px',
    fontFamily: 'Roboto'
  }
})
export default Kitchen;
