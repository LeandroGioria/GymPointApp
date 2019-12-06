import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
// import { MdSearch } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { Container, StudentTable, EditDelete } from './styles';

export default function StudentList() {
  return (
    <Container>
      <header>
        <strong>Gerenciamento alunos</strong>
        <aside>
          <Link to="/student/form">
            <IoMdAdd size={20} color="#fff" />
            <strong>CADASTRAR</strong>
          </Link>
          <Input name="search" placeholder="Buscar Aluno" />
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
              <EditDelete edit>
                <Link to="/student/edit" edit>
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
              <span>Cha Ji-Hun2</span>
            </td>
            <td>
              <span>example@rocketseat.com.br</span>
            </td>
            <td>
              <span>20</span>
            </td>
            <td>
              <EditDelete edit>
                <Link to="/student/edit">editar</Link>
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
              <span>Cha Ji-Hun</span>
            </td>
            <td>
              <span>example@rocketseat.com.br</span>
            </td>
            <td>
              <span>20</span>
            </td>
            <td>
              <EditDelete edit>
                <Link to="/student/edit">editar</Link>
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
