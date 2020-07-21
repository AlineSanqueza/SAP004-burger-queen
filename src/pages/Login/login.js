import React, { useState } from 'react';
import './index.css';
import logo from '../images/logo-burger.png';
import { Route } from 'react-router-dom';

export const Login = () => {
  const [page, setPage] = useState('');
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
            <button className='register' onClick={() => setPage('register') }>Não tem uma conta? Registre-se</button>
            {page === 'register' ? <Route to='./pages/Register/register.js' /> : null }
          </div>
          <footer>
            <p className='footer'>Desenvolvido por: Aline e Marcella</p>
          </footer>
        </div>
    );
}

export default Login;
