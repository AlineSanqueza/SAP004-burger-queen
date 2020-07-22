import React from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Paragraph from '../components/Phrase';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <div>
      <Paragraph children='Registro'/>
      <Input title='Nome Completo'/>
      <Input title='E-mail'/>
      <Input title='Senha'/>
      <Select/>
      <Button children='Criar conta'/>
      <Paragraph children='Já possui uma conta? Faça o login'/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Register;
