import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Newregister from '../components/Phrase'
import Footer  from '../components/Footer'
const Login = () => {
    return (
    <div>
        <Input titulo='E-mail'/>
        <Input titulo='senha'/>
        <Button children ='Login' />
        <Newregister />
        <div>
        <Footer/>
        </div>
    </div>
)
}

export default Login;