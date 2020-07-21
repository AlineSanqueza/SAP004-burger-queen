import React from 'react';

export const Register = () => {
  return (
    <div className = 'register'>
      <h1>Cadastro</h1>
      <input type='text' placeholder='Nome'></input>
      <input type='email' placeholder='E-mail'></input>
      <input type='password' placeholder='Senha'></input>
      <select>
        <option value=''>Sua função</option>
        <option value='kitchen'>Cozinheiro</option>
        <option value='waiter'>Garçom</option>
      </select>
      <button>Criar conta</button>
      <button>Voltar</button>
    </div>
  );
}

export default Register;