import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';
import Nav from '../components/Navbar';
import CardKitchen from '../components/Card';
import Button from '../components/Button';
import {StyleSheet, css} from 'aphrodite';

const Kitchen = () => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    const order = [];
    firebase
    .firestore()
    .collection('orders')
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        order.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setCustomer(order)
    })
  }, []);

  const updateStatus = doc => {
    firebase
    .firestore()
    .collection('orders')
    .doc(doc.id)
    .update({
      status: 'Pronto'
    })
    setCustomer(customer.filter(item => item.id !== doc.id))
  }

  return (
    <main className={css(styles.main)}>
      <Nav/>
      <section>
      <nav className={css(styles.nav)}>
        <ul>
          <li className={css(styles.li)}>
          <Link to='/saloon' className={css(styles.link)}>Voltar para o Salão</Link>
          </li>
        </ul>
      </nav>
        <h4 className={css(styles.title)}> Pedidos Prontos</h4>
        {customer.map((doc, index) =>
          doc.status === 'Pronto' ? (
            <div key={index} className={css(styles.div)}>
              <CardKitchen
                key={index}
                customer={doc.customer}
                table={doc.table}
                clientOrder={doc.order}
                status={doc.status}
              />
              <Button style={css(styles.ready)} onClick={() => updateStatus(doc)} children={'Pedido Entregue'}/>
            </div>
          ) : null
        )}
      </section>
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
    fontFamily: 'Spectral SC',
    color: '#ccc',
    fontSize: '36px',
    padding: '30px'
  },
  nav: {
    background: '#0D0D0D',
    margin: '20px',
  },
  li: {
    listStyle: 'none',
    display:'inline',
    fontSize: '23px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  link: {
    textDecoration: 'none',
    color: '#D97904',
    fontFamily: 'Spectral SC',
    cursor: 'pointer',
    transition: '1s linear',
    ':hover': {
      color: '#F2F2F2',
      cursor: 'pointer'
    }
  },
  div: {
    background: '#ccc',
    margin: '30px',
    flexDirection: 'column',
    padding: '10px',
    borderRadius: '5px',
    width: '20%'
  },
  ready: {
    background: '#227036',
    color: '#F2F2F2',
    borderRadius: '5px',
    height: '50px',
    fontSize: '20px',
    borderStyle: 'none',
    cursor: 'pointer',
    margin: '25px',
    padding: '5px',
    outline: 'none',
  }
});

export default Kitchen;
