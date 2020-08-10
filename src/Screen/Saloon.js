import React, { useEffect, useState } from 'react';
import Nav from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input';
import MenuButton from '../components/Menu';
import firebase from '../firebase';
import Swal  from 'sweetalert2';
import { StyleSheet, css } from 'aphrodite';

const Saloon = () => {
  const [menu, setMenu] = useState([]);
  const [customer, setCustomer] = useState('');
  const [table, setTable] = useState('');
  const [order, setOrder] = useState([]);

  const optionBreakfast = () => {
    firebase
    .firestore()
    .collection('menu')
    .doc('breakfast')
    .get()
    .then((snapshot) => {
      setMenu(Object.entries(snapshot.data()))
    });
}

  const optionBurger = () => {
    firebase
    .firestore()
    .collection('menu')
    .doc('burgers')
    .get()
    .then((snapshot) => {
      setMenu(Object.entries(snapshot.data()))
    });
}

  useEffect(() => {
    optionBreakfast()
  },[]);

  const addOrder = () => {
    !customer || !table || !order ?
      Swal.fire({
        title: 'Atenção',
        text: 'Adicione um item ou digite o nome do cliente e o número da mesa.',
        icon: 'warning',
        confirmButtonText: 'OK'
      })
      :
      firebase
      .firestore()
      .collection('orders')
      .add({
        customer,
        table,
        order
      }).then(
        Swal.fire({
          title: 'Pedido enviado com sucesso',
          icon: 'success',
          showConfirmButton: false,
          timer: 1600
        })
      );
  }
    const deleteItem = (e) => {
      e.preventDefault()
      // console.log(e.currentTarget.dataset.index)
      const removed = order.splice(e.currentTarget.dataset.index, 1)
      setOrder([...order]);
      console.log(order)
    };
  // const decrease = item => {
  //   if (item.counter === 1) {
  //     deleteItem(item);
  //   } else {
  //     item.counter--;
  //     setMenu([...setMenu]);
  //   }
  // }
  //   const increase = item => {
  //   if (!menu.includes (item)) {
  //     item.counter = 1;
  //     setMenu([...menu, item]);
  //   } else {
  //     item.counter += 1;
  //     setMenu([...menu]);
  //   }
  // }

  return (
    <main className={css(styles.main)}>
      <Nav/>
      <div className={css(styles.bntMenu)}>
        <Button style={css(styles.button)} onClick={(e) => optionBreakfast(e.target.value)} children='Café da manhã'/>
        <Button style={css(styles.button)} onClick={(e) => optionBurger(e.target.value)} children='Lanches'/>
      </div>
      <div className={css(styles.menu)}>
        {menu.map((el, index) => <MenuButton onClick={()=>setOrder(order.concat({item:el[0], price:el[1]}))}el={el} key={index}/>)}
      </div>
      <div className={css(styles.containerOrder)}>
        <p className={css(styles.p)}>Resumo do pedido</p>
        <div className={css(styles.position)}>
          <Input style={css(styles.input)} onChange={(e)=>setCustomer(e.target.value)} type='text' title='Cliente'/>
          <Input style={css(styles.input)} onChange={(e)=>setTable(e.target.value)} type='number' title='Mesa'/>
        </div>

        {/* CÓDIGO MARCELLA <div className={css(styles.order)}> Qnt:
          {order.map((el, index)=> (
            <div key={index}>
              <p>{el}</p>
              <p>R${el},00</p>
              <Button style={css(styles.delete)} children='🗑️'/>
            </div>
          ) 
          )}
        </div> */}

          <div className={css(styles.order)}> Qtd:
                
              <div> 
              {order.map((el, index)=> (
                <>
                  <p key={index}>{el.item} R${el.price},00</p>
                  {/* <p>R${el},00</p> */}
                  <Button index={index} onClick={deleteItem} style={css(styles.delete)} children='🗑️'/>
                </>
              )
              )}

                {/* AUMENTAR E DIMINUIR ITENS <p>R${el},00</p> 
                    <Button children={'-'} onClick={() => decrease(el)}/>
                    {el.counter}
                    <Button children={'+'} onClick={() => increase(el)}/>
                    <Button style={css(styles.delete)} onClick={e => {e.preventDefault();deleteItem(el);}}children='🗑️'/> */}
                    
              </div>
          </div>
          <div className={css(styles.position)}>
            <p className={css(styles.p)}> Total: R$ {order.reduce((acc, cur) => acc + cur.price, 0)},00</p>
            <Button style={css(styles.send)} onClick={addOrder} children='Enviar pedido'/>
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
    fontSize:'18px'
  },
  btnMenu: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '50px',
    alignItems: 'center',
    padding: '10px',
    position: 'fixed',
    top: '0',
    width: '100%'
  },
    
  menu: {
    marginTop: '15%',
    background: '#0D0D0D',
    width: '8%',
    height: '10%',
    display: 'flex',
    borderRadius: '10px',
  },
  button: {
    background: '#F2F2F2',
    borderRadius: '10px',
    width: '40%',
    height: '40%',
    margin: '0% 3% 2%',
    padding:'5px',
    fontFamily: 'Spectral SC',
    color: '#0D0D0D',
    fontSize: '24px',
    borderStyle: 'none',
    cursor: 'pointer',
    outline: 'none',
    ':active': {
    background: '#D97904',
    }
  },  
  containerOrder: {
    //marginTop: '20%',
    background: '#ccc',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    marginLeft: '30%',
    alignItems: 'center',
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
    borderStyle: 'none',
    outline: 'none'
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
    cursor: 'pointer',
    outline: 'none'
  },
  send: {
    background: '#D97904',
    color: '#F2F2F2',
    borderRadius: '5px',
    height: '40px',
    fontSize: '20px',
    borderStyle: 'none',
    cursor: 'pointer',
    margin: '25px',
    outline: 'none'
  }
});

export default Saloon;