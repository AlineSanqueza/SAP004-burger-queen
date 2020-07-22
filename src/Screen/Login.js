import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Newregister from '../components/Phrase';
import Footer  from '../components/Footer';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <div>
      <Input title='E-mail'/>
      <Input title='Senha'/>
      <Button> Login </Button>
      <Newregister/>
      <div>
        <Footer/>
      </div>
    </div>
);
}

export default Login;