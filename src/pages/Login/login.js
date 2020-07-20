import React from 'react';
import './index.css';
import logo from '../images/logo-burger.png';
export const Login = () => {
    const[color] = React.useState('#0D0D0D');
    React.useEffect(()=>{
        document.body.style.backgroundColor = color;
    },[color])
    return (
        <div class='login'>
        <img className='photo' src={logo}/>
        <input className='input-email' placeholder='E-mail'></input>
        <input className='input-password' placeholder='Senha'></input>
        <button className='btn-login font-enter'>Entrar</button>
        <div>
            <h3 className='btn-register'>Não tem conta? Registre-se</h3>
        </div>
        <footer>
            <p className='footer'>Desenvolvido por: Aline e Marcella</p>
        </footer>
        </div>
    )
}

export default Login;