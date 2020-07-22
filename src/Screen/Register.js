import React from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Paragraph from '../components/Phrase';
import Footer from '../components/Footer';
import { StyleSheet, css } from 'aphrodite';

const Register = () => {
  return (
    <div>
      <Paragraph style={css(styles.p)} children='Registro'/>
      <Input title='Nome Completo'/>
      <Input title='E-mail'/>
      <Input title='Senha'/>
      <Select/>
      <Button style={css(styles.button)} children='Criar conta'/>
      <Paragraph children='Já possui uma conta? Faça o login'/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
/*const font = {
  fontFamily: 'Spectral SC',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontFamily: 'Arial'
}*/

const styles = StyleSheet.create({
  p: {
    position: 'absolute',
    width: '339px',
    height: '77px',
    left: '264px',
    top: '129px',
    color: '#37210D',
    fontFamily: 'Spectral SC',
    fontWeight: 'bold',
    fontSize: '64px',
    lineHeight: '97px'
  },
  button: {
    background: '#D96907',
    borderRadius: '20px',
    color: 'F2F2F2'
  }
});










export default Register;
