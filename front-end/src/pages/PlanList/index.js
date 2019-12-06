import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { Container, StudentTable, EditDelete } from './styles';

export default function PlanList() {
  return (
    <Container>
      <header>
        <strong>Gerenciamento planos</strong>
        <aside>
          <Link to="/plan/form">
            <IoMdAdd size={20} color="#fff" />
            <strong>CADASTRAR</strong>
          </Link>
        </aside>
      </header>
      <StudentTable>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/ MÊS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>Start</span>
            </td>
            <td>
              <span>1 mês</span>
            </td>
            <td>
              <span>R$129,00</span>
            </td>
            <td>
              <EditDelete edit>
                <Link to="/plan/edit" edit>
                  editar
                </Link>
              </EditDelete>
            </td>
            <td>
              <EditDelete>
                <Link to="/">apagar</Link>
              </EditDelete>
            </td>
          </tr>
          <tr>
            <td>
              <span>Gold</span>
            </td>
            <td>
              <span>3 meses</span>
            </td>
            <td>
              <span>R$109,00</span>
            </td>
            <td>
              <EditDelete edit>
                <Link to="/plan/edit">editar</Link>
              </EditDelete>
            </td>
            <td>
              <EditDelete>
                <Link to="/">apagar</Link>
              </EditDelete>
            </td>
          </tr>
          <tr>
            <td>
              <span>Diamond</span>
            </td>
            <td>
              <span>6 meses</span>
            </td>
            <td>
              <span>R$89,00</span>
            </td>
            <td>
              <EditDelete edit>
                <Link to="/plan/edit">editar</Link>
              </EditDelete>
            </td>
            <td>
              <EditDelete>
                <Link to="/">apagar</Link>
              </EditDelete>
            </td>
          </tr>
        </tbody>
      </StudentTable>
    </Container>
  );
}
