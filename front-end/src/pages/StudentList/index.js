import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { Container, StudentTable } from './styles';

export default function StudentList() {
  return (
    <Container>
      <header>
        <strong>Gerenciamento alunos</strong>
        <aside>
          <button type="button">
            <IoMdAdd size={20} color="#fff" />
            <Link to="/students/form">CADASTRAR</Link>
          </button>
        </aside>
      </header>
      <StudentTable>
        <thead>
          <tr>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>IDADE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>Cha Ji-Hun</span>
            </td>
            <td>
              <span>example@rocketseat.com.br</span>
            </td>
            <td>
              <span>20</span>
            </td>
            <td>
              <Link to="/students/edit" edit>
                editar
              </Link>
            </td>
            <td>
              <Link to="/">apagar</Link>
            </td>
          </tr>
          <tr>
            <td>
              <span>Cha Ji-Hun</span>
            </td>
            <td>
              <span>example@rocketseat.com.br</span>
            </td>
            <td>
              <span>20</span>
            </td>
            <td>
              <Link to="/students/edit">editar</Link>
            </td>
            <td>
              <Link to="/">apagar</Link>
            </td>
          </tr>
          <tr>
            <td>
              <span>Cha Ji-Hun</span>
            </td>
            <td>
              <span>example@rocketseat.com.br</span>
            </td>
            <td>
              <span>20</span>
            </td>
            <td>
              <Link to="/students/edit">editar</Link>
            </td>
            <td>
              <Link to="/">apagar</Link>
            </td>
          </tr>
        </tbody>
      </StudentTable>
    </Container>
  );
}
