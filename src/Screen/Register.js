import React from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Paragraph from '../components/Phrase';
import Footer from '../components/Footer';
import { StyleSheet, css } from 'aphrodite';

const Register = () => {
  return (
    <main className={css(styles.main)}>
      <form className={css(styles.form)}>
        <header className={css(styles.header)}>
          <Paragraph children='Registro'/>
        </header>
        <Input style={css(styles.input)} title='Nome Completo'/>
        <Input style={css(styles.input)} title='E-mail'/>
        <Input style={css(styles.input)} title='Senha'/>
        <Select style={css(styles.select)}/>
        <Button style={css(styles.button)} children='Criar conta'/>
        <Paragraph style={css(styles.p)} children='Já possui uma conta? Faça o login'/>
        <div>
          <Footer style={css(styles.footer)}/>
        </div>
      </form>
    </main>
    
  );
}
/*const font = {
  fontFamily: 'Spectral SC',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontFamily: 'Arial'
}*/

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    color: '#D97904',
    fontFamily: 'Spectral SC',
    fontWeight: 'bold',
    fontSize: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '50px'
  },

  main: {
    background: '#0D0D0D',
    width:'100%',
    height: '100%'
  },

  input: {
    borderRadius: '10px',
    width: '30%',
    padding: '15px',
    margin: '0% 3% 2%',
    fontSize: '14px',
    background: '#F2F2F2',
    borderStyle: 'none'
  },

  select: {
    color: '#686869',
    width: '20%',
    borderRadius: '10px',
    height: '40px',
    padding: '5px',
    margin: '0% 3% 2%',
    fontSize: '14px',
    borderStyle: 'none'
  },

  button: {
    background: '#D97904',
    borderRadius: '10px',
    width: '15%',
    margin: '0% 3% 2%',
    padding:'10px',
    color: '#F2F2F2',
    fontSize: '14px',
    borderStyle: 'none',
    cursor: 'pointer'
  },

  form: {
    fontSize: '18px',
    fontWeight: 'bold',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    padding: '5px',
  },

  p: {
    fontFamily: 'Spectral SC',
   
    fontWeight: 'normal',
    fontSize: '20px',
    textDecoration: 'none',
    color: '#F2F2F2',
    transition: '0.2s linear',
    ':hover': {
      color: '#D97904',
      cursor: 'pointer'
    }
  }

  /*footer: {
    width: '100%',
    backgroundColor: 'red',
    fontSize: '12px',
    textAlign: 'center'
  }*/

});











export default Register;
