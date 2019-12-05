import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />
          <Link to="/">GYMPOINT</Link>
          <div>
            <Link to="/student/list">ALUNOS</Link>
            <Link to="/student/list">PLANOS</Link>
            <Link to="/student/list">MATRÍCULAS</Link>
            <Link to="/student/list">PEDIDOS DE AUXÍLIO</Link>
          </div>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Leandro Gioria</strong>
              <Link to="/">Sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
