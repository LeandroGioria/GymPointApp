import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="GymPoint" />
            <strong>GYMPOINT</strong>
          </Link>
          <div>
            <Link to="/students">ALUNOS</Link>
            <Link to="/plans">PLANOS</Link>
            <Link to="/enrollments">MATRÍCULAS</Link>
            <Link to="/helps">PEDIDOS DE AUXÍLIO</Link>
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
