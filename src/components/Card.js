import React from 'react';
// import Button from '../components/Button';
import { StyleSheet, css } from 'aphrodite';

const CardKitchen = (props) => {
  return (
    <section>
        {props.clientOrder.map((order)=>(
          <div className={css(styles.div)}>
            <p className={css(styles.p)}>{order.item} R${order.price},00</p>
            <p className={css(styles.p)}>Cliente: {props.customer}</p>
            <p className={css(styles.p)}>Mesa: {props.table}</p>
            <p className={css(styles.doing)}>Status: {props.status}</p>
          </div>
        ))}
      {/* <p>{props.time}</p> */}
      {/* <div>
        <Button title= 'Pedido Pronto'/>
      </div> */}
    </section>
  );
}

const styles = StyleSheet.create({
  p: {
    fontFamily: 'Rubik',
    fontWeight: "bold",
    color: '#0D0D0D',
    fontSize: '18px'
  },
  doing: {
    color: 'red',
    fontFamily: 'Rubik',
    fontWeight: "bold",
  }

})

export default CardKitchen;
