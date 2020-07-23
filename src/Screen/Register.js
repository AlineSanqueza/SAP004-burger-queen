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
        <Paragraph style={css(styles.p)}children='Já possui uma conta? Faça o login'/>
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
    color: '#37210D',
    fontFamily: 'Spectral SC',
    fontWeight: 'bold',
    fontSize: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  main: {
    background: 'E5E5E5',
    width:'100%',
    height: '100%'
  },

  input: {
    borderRadius: '10px',
    width: '30%',
    padding: '15px',
    margin: '0% 3% 2%',
    fontSize: '14px',
    background: 'rgba(154, 93, 38, 0.70)'
  },
  button: {
    background: '#D96907',
    borderRadius: '15px',
    width: '15%',
    margin: '0% 3% 2%',
    padding:'10px'
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

  select: {
    color: '#9A5D26',
    width: '20%',
    borderRadius: '10px',
    height: '40px',
    padding: '5px',
    margin: '0% 3% 2%'
  },

  p: {
    fontFamily: 'Alegreya Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '25px',
    color: '#37210D'
  },


  /*select: {
    color: '#9A5D26',
    position: 'absolute',
    width: '584px',
    height: '140px',
    left: '114px',
    top: '739px',
  },
  
  button: {
    background: '#D96907',
    borderRadius: 40px',
    width: '35%',
    margin: '0% 3% 2%',
    padding:'2%
  },

  p: {
    fontFamily: 'Alegreya Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '38px',
    lineHeight: '46px',
    letterSpacing: '0.02em',
    color: '#37210D'
  },

  footer: {
    width: '100%',
    backgroundColor: 'red',
    fontSize: '12px',
    textAlign: 'center'
  }*/

});











export default Register;
