import React from 'react'
import logo from '../images/logo-burger-queen.png'
import Input from '../components/Input'
import Button from '../components/Button'
import Footer  from '../components/Footer'

import {StyleSheet,css} from 'aphrodite'

const Login = () => {
    return (
    <div>
        <img  src={logo}/>
        
        <Input style={css(styles.input)} title='E-mail'/>
        <Input title='senha'/>
        <Button style={css(styles.button)} children ='Login' />
        <h4>Não tem conta? Registre-se</h4>
        <div>
        <Footer/>
        </div>
    </div>
)
}


const styles = StyleSheet.create({
    input: {
        background: 'rgba(154, 93, 38, 0.88)',
        borderRadius: '5px'

    },

    button: {
        background: 'rgba(217, 105, 7, 0.80)',
        color:'rgba(242, 242, 242, 0.8)',
        borderRadius: '40px',
        padding: 10,
        fontFamily: 'Spectral SC',
        fontSize: '36px'

    }

})



export default Login;