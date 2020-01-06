import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <NavLink to="/">
            <img src={logo} alt="GymPoint" />
            <strong>GYMPOINT</strong>
          </NavLink>
          <div>
            <NavLink activeStyle={{ color: '#000' }} to="/students">
              ALUNOS
            </NavLink>
            <NavLink activeStyle={{ color: '#000' }} to="/plans">
              PLANOS
            </NavLink>
            <NavLink activeStyle={{ color: '#000' }} to="/enrollments">
              MATRÍCULAS
            </NavLink>
            <NavLink activeStyle={{ color: '#000' }} to="/helps">
              PEDIDOS DE AUXÍLIO
            </NavLink>
          </div>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Leandro Gioria</strong>
              <button type="submit" onClick={handleSignOut}>
                Sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
