import React from 'react';

import logo from '../../assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GymPoint" />
      <br />
      <span>GYMPOINT</span>
      <form>
        <span>SEU E-MAIL</span>
        <input type="email" placeholder="exemplo@email.com" />
        <span>SUA SENHA</span>
        <input type="password" placeholder="********" />

        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
