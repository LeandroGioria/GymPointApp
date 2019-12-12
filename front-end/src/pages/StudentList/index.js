import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
// import { MdSearch } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import SweetAlert from 'react-bootstrap-sweetalert';
import api from '../../services/api';
import history from '../../services/history';

import { Container, StudentTable, EditDelete } from './styles';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [currentId, setCurrentId] = useState(-1);
  const [showDlg, setShowDlg] = useState(false);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students', { params: { name: '' } });

      if (!response.data) {
        toast.error('Erro no servidor');
      }

      setStudents(response.data);
    }

    loadStudents();
  }, []);

  async function deleteStudent() {
    await api.delete(`students/${currentId}`);
    toast.success('Usuario deletado!');

    setShowDlg(false);
    history.push('/');
  }

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
                <EditDelete edit="true">
                  <Link
                    to={{
                      pathname: '/student/form',
                      state: { student },
                    }}
                    edit
                  >
                    editar
                  </Link>
                </EditDelete>
              </td>
              <td>
                <EditDelete>
                  <button
                    type="button"
                    onClick={() => {
                      setShowDlg(true);
                      setCurrentId(student.id);
                    }}
                  >
                    apagar
                  </button>
                  <SweetAlert
                    show={showDlg}
                    warning
                    showCancel
                    confirmBtnBsStyle="danger"
                    title="Você tem certeza?"
                    onConfirm={() => deleteStudent()}
                    onCancel={() => setShowDlg(false)}
                    focusCancelBtn
                  >
                    Você irá deletar o aluno permanentemente.
                  </SweetAlert>
                </EditDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </StudentTable>
    </Container>
  );
}
