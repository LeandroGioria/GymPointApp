import React from 'react';
import { Link } from 'react-router-dom';
import { Container, HelpOrderTable } from './styles';

export default function HelpOrderList() {
  return (
    <Container>
      <strong>Pedidos de auxílio</strong>
      <HelpOrderTable>
        <thead>
          <tr>
            <th>ALUNO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>Leandro Gioria</span>
              <Link to="/help/feedback" edit>
                responder
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span>Leandro Gioria</span>
              <Link to="/help/feedback" edit>
                responder
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span>Leandro Gioria</span>
              <Link to="/help/feedback" edit>
                responder
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <span>Leandro Gioria</span>
              <Link to="/help/feedback" edit>
                responder
              </Link>
            </td>
          </tr>
        </tbody>
      </HelpOrderTable>
    </Container>
  );
}
