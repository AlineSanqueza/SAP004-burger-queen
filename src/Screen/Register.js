import React from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Paragraph from '../components/Phrase';
import { Link } from 'react-router-dom';
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
        <p className={css(styles.p)}>Já possui uma conta?
          <Link to='/' className={css(styles.link)}> Faça o login</Link>
        </p>
        
          <Footer style={css(styles.footer)}/>
        
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
    color: '#D97904',
    fontFamily: 'Spectral SC',
    fontWeight: 'bold',
    fontSize: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '40px'
  },

  main: {
    background: '#0D0D0D',
    width:'100%',
    height: '100vh'
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
    alignItems: 'center',
    padding: '5px',
  },

  p: {
    fontFamily: 'Spectral SC',
    fontWeight: 'normal',
    fontSize: '20px',
    color: '#F2F2F2',
  },

  link: {
    fontFamily: 'Spectral SC',
    fontWeight: 'normal',
    fontSize: '20px',
    textDecoration: 'none',
    color: '#F2F2F2',
    transition: '0.5s linear',
    ':hover': {
      color: '#D97904',
      cursor: 'pointer'
    }
  },

  footer: {
    fontFamily: 'Spectral SC',
    fontWeight: 'normal',
    fontSize: '14px',
    textAlign: 'center',
    color: '#F2F2F2'
  }

});

export default Register;
