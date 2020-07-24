import React from 'react';
import Logo from '../images/new-logo-burger.png';
import Input from '../components/Input';
import Button from '../components/Button';
import Paragraph from '../components/Phrase';
import Footer from '../components/Footer';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <main className={css(styles.main)}>
      <form className={css(styles.form)}>
      <img className={css(styles.image)} src={Logo} alt='burger logo'/>
        <Input style={css(styles.input)} title='E-mail'/>
        <Input style={css(styles.input)} title='Senha'/>
        <Button style={css(styles.button)} children='Login'/>
        <Paragraph style={css(styles.p)} children='Não possui uma conta? Registre-se'/>
        <div>
          <Footer style={css(styles.footer)}/>
        </div>
      </form>
    </main>
    
  );
}

const styles = StyleSheet.create({

  main: {
    background: '#0D0D0D',
    width:'100%',
    height: '100vh'
  },

  input: {
    borderRadius: '10px',
    width: '30vh',
    padding: '15px',
    margin: '0% 3% 2%',
    fontSize: '14px',
    background: '#F2F2F2',
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
  },

  footer: {
    marginTop: '70px',
    width: '100%',
    fontSize: '14px',
    textAlign: 'center',
    color:'#F2F2F2'
  }

});

export default Login;
