import React, { useState } from 'react';
import './index.css';
import logo from '../images/logo-burger.png';

export const Login = () => {

    const[color] = React.useState('#FFF');
    React.useEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color])
    return (
        <div className='login'>
          <img className='photo' src={logo} alt='logo burger' />
          <input className='input-email' placeholder='E-mail'></input>
          <input className='input-password' placeholder='Senha'></input>
          <button className='btn-login font-enter'>Entrar</button>
          <div>
            <button className='register'>Não tem uma conta? Registre-se</button>
          </div>
          <footer>
            <p className='footer'>Desenvolvido por: Aline e Marcella</p>
          </footer>
        </div>
    );
}

export default Login;
