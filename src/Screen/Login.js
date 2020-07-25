import React from 'react';
import Input from '../components/Input';
import Logo from '../images/new-logo-burger.png'
import Button from '../components/Button';
import Paragraph from '../components/Phrase';
import Footer from '../components/Footer';
import { StyleSheet, css } from 'aphrodite';
import {Link} from 'react-router-dom'
//import { queries } from '@testing-library/react';
const Login = () => {
  return (
    <main className={css(styles.main)}>
      <form className={css(styles.form)}>
      <img src={Logo}/>
        <Input style={css(styles.input)} title='E-mail'/>
        <Input style={css(styles.input)} title='Senha'/>
        <Button style={css(styles.button)} children='Login'/>
        <p className={css(styles.p)}> Não possui conta?
        <Link to='/Register' className={css(styles.link)}>Registre-se</Link>
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
//    "@media (max-width: 360px)": {
//        width: "50vw",
//        height: "4vh",
//        fontSize: '34px',
//      }
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
    //"@media (max-width: 360px)": {
    //    width: "35vw",
    //    height: "5vh",
    //    fontSize: '40px',
    //  }
  },
  form: {
    fontSize: '18px',
    fontWeight: 'bold',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px'
  },
  p: {
    fontFamily: 'Spectral SC',
    fontWeight: 'normal',
    fontSize: '20px',
    color: '#F2F2F2',
     //  "@media (min-width: 360px)": {
    //    fontSize: '20%',
    //    color: '#F2F2F2',
    //transition: '0.2s linear',
    //  }
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
export default Login;