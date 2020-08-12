import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
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
  };

  return (
    <main className={css(styles.main)}>
      <Nav/>
      <section className={css(styles.title)}>Cozinha
        {customer.map((doc, index) =>
          doc.status === 'Preparando' ? (
            <div key={index}>
              <CardKitchen
                key={index}
                customer={doc.customer}
                table={doc.table}
                clientOrder={doc.order}
                // clientOrderItem={doc.order.item}
                // clientOrderPrice={doc.order.price}
              />
              <Button onClick={() => updateStatus(doc)} children={'Pedido pronto'}/>
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
    color: '#ccc',
    fontSize: '36px',
    fontFamily: 'Roboto'
  }
});

export default Kitchen;
