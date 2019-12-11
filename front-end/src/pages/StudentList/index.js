import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
// import { MdSearch } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { Container, StudentTable, EditDelete } from './styles';

export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students', { params: { name: '' } });

      if (!response.data) {
        toast.error('Could not get users');
      }

      setStudents(response.data);
    }

    loadStudents();
  }, []);

  return (
    <Container>
      <header>
        <strong>Gerenciamento alunos</strong>
        <aside>
          <Link to="/student/form">
            <IoMdAdd size={20} color="#fff" />
            <strong>CADASTRAR</strong>
          </Link>
          <Input name="search" type="search" placeholder="Buscar Aluno" />
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
          {students.map(student => (
            <tr>
              <td>
                <span>{student.name}</span>
              </td>
              <td>
                <span>{student.email}</span>
              </td>
              <td>
                <span>{student.age}</span>
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
          ))}
        </tbody>
      </StudentTable>
    </Container>
  );
}
