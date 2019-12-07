import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { MdCheckCircle } from 'react-icons/md';
import { Container, EnrollmentTable, EditDelete } from './styles';

export default function EnrollmentList() {
  return (
    <Container>
      <header>
        <strong>Gerenciamento matrículas</strong>
        <aside>
          <Link to="/enrollment/form">
            <IoMdAdd size={20} color="#fff" />
            <strong>CADASTRAR</strong>
          </Link>
        </aside>
      </header>
      <EnrollmentTable>
        <thead>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INÍCIO</th>
            <th>TÉRMINO</th>
            <th>ATIVA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>Leandro Gioria</span>
            </td>
            <td>
              <span>Diamond</span>
            </td>
            <td>
              <span>30 de Abril de 2019</span>
            </td>
            <td>
              <span>30 de Maio de 2019</span>
            </td>
            <td>
              <MdCheckCircle size={20} color="#42cb59" />
            </td>
            <td>
              <EditDelete edit>
                <Link to="/plan/edit" edit>
                  editar
                </Link>
              </EditDelete>
            </td>
          </tr>
          <tr>
            <td>
              <span>Leandro Gioria</span>
            </td>
            <td>
              <span>Diamond</span>
            </td>
            <td>
              <span>30 de Abril de 2019</span>
            </td>
            <td>
              <span>30 de Maio de 2019</span>
            </td>
            <td>
              <MdCheckCircle size={20} color="#42cb59" />
            </td>
            <td>
              <EditDelete edit>
                <Link to="/plan/edit" edit>
                  editar
                </Link>
              </EditDelete>
            </td>
          </tr>
          <tr>
            <td>
              <span>Leandro Gioria</span>
            </td>
            <td>
              <span>Diamond</span>
            </td>
            <td>
              <span>30 de Abril de 2019</span>
            </td>
            <td>
              <span>30 de Maio de 2019</span>
            </td>
            <td>
              <MdCheckCircle size={20} color="#42cb59" />
            </td>
            <td>
              <EditDelete edit>
                <Link to="/plan/edit" edit>
                  editar
                </Link>
              </EditDelete>
            </td>
          </tr>
        </tbody>
      </EnrollmentTable>
    </Container>
  );
}
