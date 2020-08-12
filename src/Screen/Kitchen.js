import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import Nav from '../components/Navbar';
import CardKitchen from '../components/Card';
import Button from '../components/Button';
import {StyleSheet,css} from 'aphrodite'

const Kitchen = () => {
    <main>
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
});
export default Kitchen;
