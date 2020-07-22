import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Paragraph from '../components/Phrase';
import Footer  from '../components/Footer';

const Login = () => {
  return (
    <div>
      <Input title='E-mail'/>
      <Input title='Senha'/>
      <Button children='Login'/>
      <Paragraph children='Não tem uma conta? Registre-se'/>
      <div>
        <Footer/>
      </div>
    </div>
);
}

export default Login;